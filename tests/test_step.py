"""Quick tests for `recipe.step` helpers.

Run with:

```bash
python -m tests.test_step
```

(or) from repository root:

```bash
python tests/test_step.py
```
"""

import sys
from pathlib import Path

# Make src importable
workspace = Path(__file__).resolve().parents[1]
src_path = workspace / 'src'
sys.path.insert(0, str(src_path))

from recipe.step import step, recipe


def build_sample_graph():
    # Build steps: s1 -> s2 -> s3
    s1 = step('S1', 'first step')
    s1.duration = 5
    s2 = step('S2', 'second step')
    s2.duration = 10
    s3 = step('S3', 'third step')
    s3.duration = 3

    # Set dependencies: s2 depends on s1, s3 depends on s2
    s2.dependencies.append(s1)
    s3.dependencies.append(s2)

    # Create recipe and add steps
    r = recipe('test')
    r.add_step(s1)
    r.add_step(s2)
    r.add_step(s3)

    # Link upwards (private method)
    try:
        r._recipe__link_up_steps()
    except Exception:
        # fallback: call the public method if exposed later
        try:
            r.__link_up_steps()
        except Exception:
            pass

    return r, (s1, s2, s3)


def run_tests():
    r, (s1, s2, s3) = build_sample_graph()

    # longest_timechain_after_completion expectations:
    # s1 -> s2 (10) -> s3 (3)  => longest following chain from s1 is 10+3 = 13
    # s2 -> s3 (3)            => 3
    # s3 -> none              => 0

    ltc_s1 = s1.longest_timechain_after_completion()
    ltc_s2 = s2.longest_timechain_after_completion()
    ltc_s3 = s3.longest_timechain_after_completion()

    print('ltc_s1 =', ltc_s1, 'expected=13')
    print('ltc_s2 =', ltc_s2, 'expected=3')
    print('ltc_s3 =', ltc_s3, 'expected=0')

    assert ltc_s1 == 13, f'ltc_s1 was {ltc_s1}'
    assert ltc_s2 == 3, f'ltc_s2 was {ltc_s2}'
    assert ltc_s3 == 0, f'ltc_s3 was {ltc_s3}'

    # Test minimum_time_to_complete for s3 (should include s2 and s1 durations)
    # minimum_time_to_complete walks dependencies backward: s3 depends on s2 -> depends on s1
    # s3.duration + s2.duration + s1.duration = 3 + 10 + 5 = 18
    min_s3 = s3.minimum_time_to_complete()
    print('min_s3 =', min_s3, 'expected=18')
    assert min_s3 == 18, f'min_s3 was {min_s3}'

    # Mark s1 completed and check duration_remaining on recipe
    s1.completed = True
    remaining = r.duration_remaining()
    print('remaining after marking s1 done =', remaining, 'expected=13')
    assert remaining == 13, f'remaining was {remaining}'

    print('\nAll quick tests passed.')


if __name__ == '__main__':
    run_tests()
