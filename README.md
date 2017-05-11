# Unix Epoch Anniversary
_(a.k.a "When is the next `time_t` party?")_

This small page displays a countdown until the next event in the unix timestamp. These can be different things like the start of the next half of this billenium, the next time 10 numbers in a row are the same (which is only reachable on 64-bit systems) or the start of the [2038 problem](https://en.wikipedia.org/wiki/Year_2038_problem).

## Suggesting new events
To suggest new events to be tracked, just open an issue in the [GitHub repository](https://github.com/mspl13/unix-epoch-anniversary/issues).

## Custom Events
You can also use the http query parameter `timestamp` to track custom events. The value should be given in seconds. An example would be `https://spliethoever.de/projects/uea?timestamp=2222222222` to track the timestamp _2222222222_.
