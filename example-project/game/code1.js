gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDplayer_95951Objects1= [];
gdjs.MenuCode.GDplayer_95951Objects2= [];
gdjs.MenuCode.GDplayer_95954Objects1= [];
gdjs.MenuCode.GDplayer_95954Objects2= [];
gdjs.MenuCode.GDplayer_95953Objects1= [];
gdjs.MenuCode.GDplayer_95953Objects2= [];
gdjs.MenuCode.GDplayer_95952Objects1= [];
gdjs.MenuCode.GDplayer_95952Objects2= [];
gdjs.MenuCode.GDlive_9595countObjects1= [];
gdjs.MenuCode.GDlive_9595countObjects2= [];
gdjs.MenuCode.GDwineObjects1= [];
gdjs.MenuCode.GDwineObjects2= [];
gdjs.MenuCode.GDrumObjects1= [];
gdjs.MenuCode.GDrumObjects2= [];
gdjs.MenuCode.GDmartiniObjects1= [];
gdjs.MenuCode.GDmartiniObjects2= [];
gdjs.MenuCode.GDbeer_9595glassObjects1= [];
gdjs.MenuCode.GDbeer_9595glassObjects2= [];
gdjs.MenuCode.GDwhiskeyObjects1= [];
gdjs.MenuCode.GDwhiskeyObjects2= [];
gdjs.MenuCode.GDNewSprite2Objects1= [];
gdjs.MenuCode.GDNewSprite2Objects2= [];
gdjs.MenuCode.GDNewSprite3Objects1= [];
gdjs.MenuCode.GDNewSprite3Objects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDplayer_959595951Objects1Objects = Hashtable.newFrom({"player_1": gdjs.MenuCode.GDplayer_95951Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDbeer_95959595glassObjects1Objects = Hashtable.newFrom({"beer_glass": gdjs.MenuCode.GDbeer_9595glassObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("wine"), gdjs.MenuCode.GDwineObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDwineObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDwineObjects1[i].addForce(-(200), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("beer_glass"), gdjs.MenuCode.GDbeer_9595glassObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.MenuCode.GDplayer_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDplayer_959595951Objects1Objects, gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDbeer_95959595glassObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDplayer_95951Objects1.length = 0;
gdjs.MenuCode.GDplayer_95951Objects2.length = 0;
gdjs.MenuCode.GDplayer_95954Objects1.length = 0;
gdjs.MenuCode.GDplayer_95954Objects2.length = 0;
gdjs.MenuCode.GDplayer_95953Objects1.length = 0;
gdjs.MenuCode.GDplayer_95953Objects2.length = 0;
gdjs.MenuCode.GDplayer_95952Objects1.length = 0;
gdjs.MenuCode.GDplayer_95952Objects2.length = 0;
gdjs.MenuCode.GDlive_9595countObjects1.length = 0;
gdjs.MenuCode.GDlive_9595countObjects2.length = 0;
gdjs.MenuCode.GDwineObjects1.length = 0;
gdjs.MenuCode.GDwineObjects2.length = 0;
gdjs.MenuCode.GDrumObjects1.length = 0;
gdjs.MenuCode.GDrumObjects2.length = 0;
gdjs.MenuCode.GDmartiniObjects1.length = 0;
gdjs.MenuCode.GDmartiniObjects2.length = 0;
gdjs.MenuCode.GDbeer_9595glassObjects1.length = 0;
gdjs.MenuCode.GDbeer_9595glassObjects2.length = 0;
gdjs.MenuCode.GDwhiskeyObjects1.length = 0;
gdjs.MenuCode.GDwhiskeyObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MenuCode.GDNewSprite3Objects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDplayer_95951Objects1.length = 0;
gdjs.MenuCode.GDplayer_95951Objects2.length = 0;
gdjs.MenuCode.GDplayer_95954Objects1.length = 0;
gdjs.MenuCode.GDplayer_95954Objects2.length = 0;
gdjs.MenuCode.GDplayer_95953Objects1.length = 0;
gdjs.MenuCode.GDplayer_95953Objects2.length = 0;
gdjs.MenuCode.GDplayer_95952Objects1.length = 0;
gdjs.MenuCode.GDplayer_95952Objects2.length = 0;
gdjs.MenuCode.GDlive_9595countObjects1.length = 0;
gdjs.MenuCode.GDlive_9595countObjects2.length = 0;
gdjs.MenuCode.GDwineObjects1.length = 0;
gdjs.MenuCode.GDwineObjects2.length = 0;
gdjs.MenuCode.GDrumObjects1.length = 0;
gdjs.MenuCode.GDrumObjects2.length = 0;
gdjs.MenuCode.GDmartiniObjects1.length = 0;
gdjs.MenuCode.GDmartiniObjects2.length = 0;
gdjs.MenuCode.GDbeer_9595glassObjects1.length = 0;
gdjs.MenuCode.GDbeer_9595glassObjects2.length = 0;
gdjs.MenuCode.GDwhiskeyObjects1.length = 0;
gdjs.MenuCode.GDwhiskeyObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MenuCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
