gdjs.game_32processCode = {};
gdjs.game_32processCode.localVariables = [];
gdjs.game_32processCode.GDNewSpriteObjects1= [];
gdjs.game_32processCode.GDNewSpriteObjects2= [];
gdjs.game_32processCode.GDlive_9595countObjects1= [];
gdjs.game_32processCode.GDlive_9595countObjects2= [];
gdjs.game_32processCode.GDdrunk_95951Objects1= [];
gdjs.game_32processCode.GDdrunk_95951Objects2= [];
gdjs.game_32processCode.GDdrunk_95952Objects1= [];
gdjs.game_32processCode.GDdrunk_95952Objects2= [];
gdjs.game_32processCode.GDdrunk_95953Objects1= [];
gdjs.game_32processCode.GDdrunk_95953Objects2= [];
gdjs.game_32processCode.GDdrunk_95954Objects1= [];
gdjs.game_32processCode.GDdrunk_95954Objects2= [];
gdjs.game_32processCode.GDdrunk_95955Objects1= [];
gdjs.game_32processCode.GDdrunk_95955Objects2= [];
gdjs.game_32processCode.GDcocktail_95951Objects1= [];
gdjs.game_32processCode.GDcocktail_95951Objects2= [];
gdjs.game_32processCode.GDwineObjects1= [];
gdjs.game_32processCode.GDwineObjects2= [];
gdjs.game_32processCode.GDMartiniObjects1= [];
gdjs.game_32processCode.GDMartiniObjects2= [];
gdjs.game_32processCode.GDbeerObjects1= [];
gdjs.game_32processCode.GDbeerObjects2= [];
gdjs.game_32processCode.GDwhiskeyObjects1= [];
gdjs.game_32processCode.GDwhiskeyObjects2= [];
gdjs.game_32processCode.GDwater_9595cupObjects1= [];
gdjs.game_32processCode.GDwater_9595cupObjects2= [];
gdjs.game_32processCode.GDFlatHeartBarObjects1= [];
gdjs.game_32processCode.GDFlatHeartBarObjects2= [];


gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDcocktail_959595951Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDwineObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDMartiniObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDbeerObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDwhiskeyObjects1Objects = Hashtable.newFrom({"cocktail_1": gdjs.game_32processCode.GDcocktail_95951Objects1, "wine": gdjs.game_32processCode.GDwineObjects1, "Martini": gdjs.game_32processCode.GDMartiniObjects1, "beer": gdjs.game_32processCode.GDbeerObjects1, "whiskey": gdjs.game_32processCode.GDwhiskeyObjects1});
gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDdrunk_959595951Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595952Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595953Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595954Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595955Objects1Objects = Hashtable.newFrom({"drunk_1": gdjs.game_32processCode.GDdrunk_95951Objects1, "drunk_2": gdjs.game_32processCode.GDdrunk_95952Objects1, "drunk_3": gdjs.game_32processCode.GDdrunk_95953Objects1, "drunk_4": gdjs.game_32processCode.GDdrunk_95954Objects1, "drunk_5": gdjs.game_32processCode.GDdrunk_95955Objects1});
gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDcocktail_959595951Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDwineObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDMartiniObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDbeerObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDwhiskeyObjects1Objects = Hashtable.newFrom({"cocktail_1": gdjs.game_32processCode.GDcocktail_95951Objects1, "wine": gdjs.game_32processCode.GDwineObjects1, "Martini": gdjs.game_32processCode.GDMartiniObjects1, "beer": gdjs.game_32processCode.GDbeerObjects1, "whiskey": gdjs.game_32processCode.GDwhiskeyObjects1});
gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDwater_95959595cupObjects1Objects = Hashtable.newFrom({"water_cup": gdjs.game_32processCode.GDwater_9595cupObjects1});
gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDdrunk_959595951Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595952Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595953Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595954Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595955Objects1Objects = Hashtable.newFrom({"drunk_1": gdjs.game_32processCode.GDdrunk_95951Objects1, "drunk_2": gdjs.game_32processCode.GDdrunk_95952Objects1, "drunk_3": gdjs.game_32processCode.GDdrunk_95953Objects1, "drunk_4": gdjs.game_32processCode.GDdrunk_95954Objects1, "drunk_5": gdjs.game_32processCode.GDdrunk_95955Objects1});
gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDwater_95959595cupObjects1Objects = Hashtable.newFrom({"water_cup": gdjs.game_32processCode.GDwater_9595cupObjects1});
gdjs.game_32processCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.game_32processCode.GDFlatHeartBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_1"), gdjs.game_32processCode.GDdrunk_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_2"), gdjs.game_32processCode.GDdrunk_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_3"), gdjs.game_32processCode.GDdrunk_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_4"), gdjs.game_32processCode.GDdrunk_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_5"), gdjs.game_32processCode.GDdrunk_95955Objects1);
{for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95951Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95951Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95952Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95952Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95953Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95953Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95954Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95954Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95955Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95955Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.game_32processCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDFlatHeartBarObjects1[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GlassSpawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "water");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GlassSpawn") > runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber();
if (isConditionTrue_0) {
gdjs.game_32processCode.GDMartiniObjects1.length = 0;

gdjs.game_32processCode.GDbeerObjects1.length = 0;

gdjs.game_32processCode.GDcocktail_95951Objects1.length = 0;

gdjs.game_32processCode.GDwhiskeyObjects1.length = 0;

gdjs.game_32processCode.GDwineObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GlassSpawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDcocktail_959595951Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDwineObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDMartiniObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDbeerObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDwhiskeyObjects1Objects, gdjs.evtTools.window.getWindowInnerWidth(), gdjs.random(gdjs.evtTools.window.getWindowInnerHeight()), "");
}{for(var i = 0, len = gdjs.game_32processCode.GDcocktail_95951Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDcocktail_95951Objects1[i].addForce(-(200), 0, 1);
}
for(var i = 0, len = gdjs.game_32processCode.GDwineObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDwineObjects1[i].addForce(-(200), 0, 1);
}
for(var i = 0, len = gdjs.game_32processCode.GDMartiniObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDMartiniObjects1[i].addForce(-(200), 0, 1);
}
for(var i = 0, len = gdjs.game_32processCode.GDbeerObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDbeerObjects1[i].addForce(-(200), 0, 1);
}
for(var i = 0, len = gdjs.game_32processCode.GDwhiskeyObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDwhiskeyObjects1[i].addForce(-(200), 0, 1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).mul(2);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Martini"), gdjs.game_32processCode.GDMartiniObjects1);
gdjs.copyArray(runtimeScene.getObjects("beer"), gdjs.game_32processCode.GDbeerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cocktail_1"), gdjs.game_32processCode.GDcocktail_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_1"), gdjs.game_32processCode.GDdrunk_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_2"), gdjs.game_32processCode.GDdrunk_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_3"), gdjs.game_32processCode.GDdrunk_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_4"), gdjs.game_32processCode.GDdrunk_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_5"), gdjs.game_32processCode.GDdrunk_95955Objects1);
gdjs.copyArray(runtimeScene.getObjects("whiskey"), gdjs.game_32processCode.GDwhiskeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("wine"), gdjs.game_32processCode.GDwineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDdrunk_959595951Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595952Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595953Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595954Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595955Objects1Objects, gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDcocktail_959595951Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDwineObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDMartiniObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDbeerObjects1ObjectsGDgdjs_9546game_959532processCode_9546GDwhiskeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.game_32processCode.GDMartiniObjects1 */
/* Reuse gdjs.game_32processCode.GDbeerObjects1 */
/* Reuse gdjs.game_32processCode.GDcocktail_95951Objects1 */
/* Reuse gdjs.game_32processCode.GDwhiskeyObjects1 */
/* Reuse gdjs.game_32processCode.GDwineObjects1 */
{for(var i = 0, len = gdjs.game_32processCode.GDcocktail_95951Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDcocktail_95951Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.game_32processCode.GDwineObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDwineObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.game_32processCode.GDMartiniObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDMartiniObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.game_32processCode.GDbeerObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDbeerObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.game_32processCode.GDwhiskeyObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDwhiskeyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("drunk_1"), gdjs.game_32processCode.GDdrunk_95951Objects1);
{for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95951Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95951Objects1[i].getBehavior("Text").setText("😄");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("drunk_1"), gdjs.game_32processCode.GDdrunk_95951Objects1);
{for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95951Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95951Objects1[i].getBehavior("Text").setText("🥴");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("drunk_1"), gdjs.game_32processCode.GDdrunk_95951Objects1);
{for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95951Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95951Objects1[i].getBehavior("Text").setText("😵‍💫");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("drunk_1"), gdjs.game_32processCode.GDdrunk_95951Objects1);
{for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95951Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95951Objects1[i].getBehavior("Text").setText("🤢");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("drunk_1"), gdjs.game_32processCode.GDdrunk_95951Objects1);
{for(var i = 0, len = gdjs.game_32processCode.GDdrunk_95951Objects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDdrunk_95951Objects1[i].getBehavior("Text").setText("🤮");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "water") > 10;
if (isConditionTrue_0) {
gdjs.game_32processCode.GDwater_9595cupObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "water");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDwater_95959595cupObjects1Objects, 800, gdjs.random(600), "");
}{for(var i = 0, len = gdjs.game_32processCode.GDwater_9595cupObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDwater_9595cupObjects1[i].addForce(-(200), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "water");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("drunk_1"), gdjs.game_32processCode.GDdrunk_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_2"), gdjs.game_32processCode.GDdrunk_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_3"), gdjs.game_32processCode.GDdrunk_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_4"), gdjs.game_32processCode.GDdrunk_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("drunk_5"), gdjs.game_32processCode.GDdrunk_95955Objects1);
gdjs.copyArray(runtimeScene.getObjects("water_cup"), gdjs.game_32processCode.GDwater_9595cupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDdrunk_959595951Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595952Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595953Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595954Objects1ObjectsGDgdjs_9546game_959532processCode_9546GDdrunk_959595955Objects1Objects, gdjs.game_32processCode.mapOfGDgdjs_9546game_959532processCode_9546GDwater_95959595cupObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.game_32processCode.GDwater_9595cupObjects1 */
{for(var i = 0, len = gdjs.game_32processCode.GDwater_9595cupObjects1.length ;i < len;++i) {
    gdjs.game_32processCode.GDwater_9595cupObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.game_32processCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32processCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32processCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32processCode.GDlive_9595countObjects1.length = 0;
gdjs.game_32processCode.GDlive_9595countObjects2.length = 0;
gdjs.game_32processCode.GDdrunk_95951Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95951Objects2.length = 0;
gdjs.game_32processCode.GDdrunk_95952Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95952Objects2.length = 0;
gdjs.game_32processCode.GDdrunk_95953Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95953Objects2.length = 0;
gdjs.game_32processCode.GDdrunk_95954Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95954Objects2.length = 0;
gdjs.game_32processCode.GDdrunk_95955Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95955Objects2.length = 0;
gdjs.game_32processCode.GDcocktail_95951Objects1.length = 0;
gdjs.game_32processCode.GDcocktail_95951Objects2.length = 0;
gdjs.game_32processCode.GDwineObjects1.length = 0;
gdjs.game_32processCode.GDwineObjects2.length = 0;
gdjs.game_32processCode.GDMartiniObjects1.length = 0;
gdjs.game_32processCode.GDMartiniObjects2.length = 0;
gdjs.game_32processCode.GDbeerObjects1.length = 0;
gdjs.game_32processCode.GDbeerObjects2.length = 0;
gdjs.game_32processCode.GDwhiskeyObjects1.length = 0;
gdjs.game_32processCode.GDwhiskeyObjects2.length = 0;
gdjs.game_32processCode.GDwater_9595cupObjects1.length = 0;
gdjs.game_32processCode.GDwater_9595cupObjects2.length = 0;
gdjs.game_32processCode.GDFlatHeartBarObjects1.length = 0;
gdjs.game_32processCode.GDFlatHeartBarObjects2.length = 0;

gdjs.game_32processCode.eventsList0(runtimeScene);
gdjs.game_32processCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32processCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32processCode.GDlive_9595countObjects1.length = 0;
gdjs.game_32processCode.GDlive_9595countObjects2.length = 0;
gdjs.game_32processCode.GDdrunk_95951Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95951Objects2.length = 0;
gdjs.game_32processCode.GDdrunk_95952Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95952Objects2.length = 0;
gdjs.game_32processCode.GDdrunk_95953Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95953Objects2.length = 0;
gdjs.game_32processCode.GDdrunk_95954Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95954Objects2.length = 0;
gdjs.game_32processCode.GDdrunk_95955Objects1.length = 0;
gdjs.game_32processCode.GDdrunk_95955Objects2.length = 0;
gdjs.game_32processCode.GDcocktail_95951Objects1.length = 0;
gdjs.game_32processCode.GDcocktail_95951Objects2.length = 0;
gdjs.game_32processCode.GDwineObjects1.length = 0;
gdjs.game_32processCode.GDwineObjects2.length = 0;
gdjs.game_32processCode.GDMartiniObjects1.length = 0;
gdjs.game_32processCode.GDMartiniObjects2.length = 0;
gdjs.game_32processCode.GDbeerObjects1.length = 0;
gdjs.game_32processCode.GDbeerObjects2.length = 0;
gdjs.game_32processCode.GDwhiskeyObjects1.length = 0;
gdjs.game_32processCode.GDwhiskeyObjects2.length = 0;
gdjs.game_32processCode.GDwater_9595cupObjects1.length = 0;
gdjs.game_32processCode.GDwater_9595cupObjects2.length = 0;
gdjs.game_32processCode.GDFlatHeartBarObjects1.length = 0;
gdjs.game_32processCode.GDFlatHeartBarObjects2.length = 0;


return;

}

gdjs['game_32processCode'] = gdjs.game_32processCode;
