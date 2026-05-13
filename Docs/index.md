# LibTSMDatabase

[LibTSMDatabase](https://github.com/TradeSkillMaster/LibTSMDatabase) provides a database
framework for World of Warcraft addons.

## Dependencies

This library has the following external dependencies which must be installed separately within the
target application:

* [LibTSMClass](https://github.com/TradeSkillMaster/LibTSMClass)
* [LibTSMCore](https://github.com/TradeSkillMaster/LibTSMCore)
* [LibTSMUtil](https://github.com/TradeSkillMaster/LibTSMUtil)
* [LibTSMReactive](https://github.com/TradeSkillMaster/LibTSMReactive)

## Installation

If you're using the [BigWigs packager](https://github.com/BigWigsMods/packager), you can reference
LibTSMDatabase as an external library:

```yaml
externals:
  Libs/LibTSMDatabase:
    url: https://github.com/TradeSkillMaster/LibTSMDatabase.git
```

Otherwise, you can download the
[latest release directly from GitHub](https://github.com/TradeSkillMaster/LibTSMDatabase/releases).
