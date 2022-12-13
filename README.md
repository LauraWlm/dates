# The `Date` Object

Javascript has [a set of features to handle and manipulate time](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

## Theory

### WARNING: TIMEZONES!

Timezones are a mess, they are a developer nightmare. It could be 6 in the morning for you while it's already 8 hours later in Tokyo, and its still yesterday's date in New York.

To try to solve this problem, developpers came with a concept called `timezone offset` : when using a date in javascript (and in many other programming languages), you'll often see a number at the end of the date. This is the number of hours ahead or behind the [Coordinated Universal Time
(UTC, in short)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).

For example in Brussels, we are one hour ahead of UTC, we would write:
```
2020-11-24T16:00+01:00
```

To say we are the 24th of November at 16h, Brussels time (UTC +1h)