local Env = require("LibTSMCore.Tests.Env.Core")
Env.Init("TradeSkillMaster", "RETAIL")
Env.LoadAddonFiles({
	"LibTSMClass/LibStub/LibStub.lua",
	"LibTSMClass/LibTSMClass.lua",
	"LibTSMCore/LibTSMCore.xml",
	"LibTSMUtil/LibTSMUtil.xml",
	"LibTSMReactive/LibTSMReactive.xml",
	"LibTSMDatabase/LibTSMDatabase.xml",
})
Env.LoadTestCaseFiles({
	"LibTSMDatabase/Tests/DatabaseTest.lua",
})
Env.Run()
