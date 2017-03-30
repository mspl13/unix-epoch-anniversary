# Unix Epoch Anniversary
_(a.k.a "When is the next `time_t` party?")_

This small site displays a countdown until the next event in the unix timestamp. Thsese can be different things like the start of the next half of this billenium, the next time 10 numbers in a row are the same (which is only reachable on 64-bit systems) or the start of the [2038 problem](https://en.wikipedia.org/wiki/Year_2038_problem).

## Suggesting new events
To suggest new events to be tracked, just open an issue in the [GitHub repository](#).

# TODOs
- sync time to NTP Server and use local as fallback (or is the time calculated on every computer?)
- additional ideas
  - ideas: next major time (2000000000), end of 32-bit integer time, new years, leap seconds, leap year, round binary representations, round day/hour numbers since unix epoch
- different "calculated values" text on each reload
- footer (partial?, with brunch? with pug?)
- linter
- webpack and js modules?
- replace this todo list with repository issues
- display the actual unix timestamp somewhere
- add editorconfig and linter
- move TODOs to GitHub issue tracker
- count up vs count down
- check for performance issues (e.g. with chrome dev tools timeline)
- generate complete "calculated values" string in js, so only one element needs to be updated
