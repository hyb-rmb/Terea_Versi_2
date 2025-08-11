(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BerminCopy1A = function() {
	this.initialize(img.BerminCopy1A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,180);


(lib.BerminGround2 = function() {
	this.initialize(img.BerminGround2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,457);


(lib.BerminPack = function() {
	this.initialize(img.BerminPack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,240);


(lib.bermintxt = function() {
	this.initialize(img.bermintxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1822,342);


(lib.BerminwaterFlower0 = function() {
	this.initialize(img.BerminwaterFlower0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,338);


(lib.BerminwaterFlower1 = function() {
	this.initialize(img.BerminwaterFlower1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,338);


(lib.BerminwaterFlower2 = function() {
	this.initialize(img.BerminwaterFlower2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,338);


(lib.BerminCapsule = function() {
	this.initialize(img.BerminCapsule);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,225);


(lib.Findmorewhite = function() {
	this.initialize(img.Findmorewhite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,29);


(lib.green_light = function() {
	this.initialize(img.green_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,284);


(lib.NewBERMIN = function() {
	this.initialize(img.NewBERMIN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,75);


(lib.NewPERMIN = function() {
	this.initialize(img.NewPERMIN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,100);


(lib.PerintCopy1A = function() {
	this.initialize(img.PerintCopy1A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,144);


(lib.perint_txt = function() {
	this.initialize(img.perint_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2221,342);


(lib.PerminGround2 = function() {
	this.initialize(img.PerminGround2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,443);


(lib.PerminPack = function() {
	this.initialize(img.PerminPack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,240);


(lib.PerminwaterFlower0 = function() {
	this.initialize(img.PerminwaterFlower0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.PerminwaterFlower1 = function() {
	this.initialize(img.PerminwaterFlower1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.PerminwaterFlower2 = function() {
	this.initialize(img.PerminwaterFlower2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.PerrminCapsule = function() {
	this.initialize(img.PerrminCapsule);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,225);


(lib.purplelights = function() {
	this.initialize(img.purplelights);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,283);


(lib.Warning = function() {
	this.initialize(img.Warning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.warning = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Warning();
	this.instance.setTransform(-160,-26.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.warning, new cjs.Rectangle(-160,-26.7,320,53.5), null);


(lib.t2_a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PerintCopy1A();
	this.instance.setTransform(-220,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2_a, new cjs.Rectangle(-220,-72,440,144), null);


(lib.t1_b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bermintxt();
	this.instance.setTransform(-85.95,-16.1,0.0943,0.0943);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1_b, new cjs.Rectangle(-85.9,-16.1,171.9,32.3), null);


(lib.t1_a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BerminCopy1A();
	this.instance.setTransform(-85.5,-28,0.3109,0.3109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1_a, new cjs.Rectangle(-85.5,-28,171,56), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-167.5,-85.9,335,171.9), null);


(lib.prpl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.purplelights();
	this.instance.setTransform(-140.5,-141.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prpl, new cjs.Rectangle(-140.5,-141.5,281,283), null);


(lib.pr_splash3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PerminwaterFlower2();
	this.instance.setTransform(-225,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pr_splash3, new cjs.Rectangle(-225,-225,450,450), null);


(lib.pr_splash2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PerminwaterFlower1();
	this.instance.setTransform(-225,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pr_splash2, new cjs.Rectangle(-225,-225,450,450), null);


(lib.pr_splash1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PerminwaterFlower0();
	this.instance.setTransform(-225,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pr_splash1, new cjs.Rectangle(-225,-225,450,450), null);


(lib.pr_pearl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PerrminCapsule();
	this.instance.setTransform(-110,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pr_pearl, new cjs.Rectangle(-110,-112.5,220,225), null);


(lib.pr_pack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PerminPack();
	this.instance.setTransform(-145,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pr_pack, new cjs.Rectangle(-145,-120,290,240), null);


(lib.pr_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PerminGround2();
	this.instance.setTransform(-225,-221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pr_bg, new cjs.Rectangle(-225,-221.5,450,443), null);


(lib.perint_txt_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.perint_txt();
	this.instance.setTransform(-97,-15,0.0877,0.0877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-15,194.9,30);


(lib.new_pr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NewPERMIN();
	this.instance.setTransform(-120,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_pr, new cjs.Rectangle(-120,-50,240,100), null);


(lib.mcberminbg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BerminGround2();
	this.instance.setTransform(-284.05,-288.5,1.2626,1.2626);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcberminbg, new cjs.Rectangle(-284,-288.5,568.1,577), null);


(lib.mc_time2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-102.9,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(-101.85,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-23.1,-0.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-23.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-10.5}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-4.2}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false,x:-100.8},0).to({_off:true},1).wait(2).to({_off:false,x:-97.65},0).to({_off:true},1).wait(2).to({_off:false,x:-94.5},0).to({_off:true},1).wait(2).to({_off:false,x:-91.35},0).to({_off:true},1).wait(2).to({_off:false,x:-88.2},0).to({_off:true},1).wait(2).to({_off:false,x:-85.05},0).to({_off:true},1).wait(2).to({_off:false,x:-81.9},0).to({_off:true},1).wait(2).to({_off:false,x:-78.75},0).to({_off:true},1).wait(2).to({_off:false,x:-75.6},0).to({_off:true},1).wait(2).to({_off:false,x:-72.45},0).to({_off:true},1).wait(2).to({_off:false,x:-69.3},0).to({_off:true},1).wait(2).to({_off:false,x:-66.15},0).to({_off:true},1).wait(2).to({_off:false,x:-63},0).to({_off:true},1).wait(2).to({_off:false,x:-59.85},0).to({_off:true},1).wait(2).to({_off:false,x:-56.7},0).to({_off:true},1).wait(2).to({_off:false,x:-53.55},0).to({_off:true},1).wait(2).to({_off:false,x:-50.4},0).to({_off:true},1).wait(2).to({_off:false,x:-47.25},0).to({_off:true},1).wait(2).to({_off:false,x:-44.1},0).to({_off:true},1).wait(2).to({_off:false,x:-40.95},0).to({_off:true},1).wait(2).to({_off:false,x:-37.8},0).to({_off:true},1).wait(2).to({_off:false,x:-34.65},0).to({_off:true},1).wait(2).to({_off:false,x:-31.5},0).to({_off:true},1).wait(2).to({_off:false,x:-28.35},0).to({_off:true},1).wait(2).to({_off:false,x:-25.2},0).to({_off:true},1).wait(2).to({_off:false,x:-22.05},0).to({_off:true},1).wait(2).to({_off:false,x:-18.9},0).to({_off:true},1).wait(2).to({_off:false,x:-15.75},0).to({_off:true},1).wait(2).to({_off:false,x:-12.6},0).to({_off:true},1).wait(2).to({_off:false,x:-9.45},0).to({_off:true},1).wait(2).to({_off:false,x:-6.3},0).to({_off:true},1).wait(2).to({_off:false,x:-3.15},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-99.75},0).to({_off:true},1).wait(2).to({_off:false,x:-96.6},0).to({_off:true},1).wait(2).to({_off:false,x:-93.45},0).to({_off:true},1).wait(2).to({_off:false,x:-90.3},0).to({_off:true},1).wait(2).to({_off:false,x:-87.15},0).to({_off:true},1).wait(2).to({_off:false,x:-84},0).to({_off:true},1).wait(2).to({_off:false,x:-80.85},0).to({_off:true},1).wait(2).to({_off:false,x:-77.7},0).to({_off:true},1).wait(2).to({_off:false,x:-74.55},0).to({_off:true},1).wait(2).to({_off:false,x:-71.4},0).to({_off:true},1).wait(2).to({_off:false,x:-68.25},0).to({_off:true},1).wait(2).to({_off:false,x:-65.1},0).to({_off:true},1).wait(2).to({_off:false,x:-61.95},0).to({_off:true},1).wait(2).to({_off:false,x:-58.8},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(2).to({_off:false,x:-52.5},0).to({_off:true},1).wait(2).to({_off:false,x:-49.35},0).to({_off:true},1).wait(2).to({_off:false,x:-46.2},0).to({_off:true},1).wait(2).to({_off:false,x:-43.05},0).to({_off:true},1).wait(2).to({_off:false,x:-39.9},0).to({_off:true},1).wait(2).to({_off:false,x:-36.75},0).to({_off:true},1).wait(2).to({_off:false,x:-33.6},0).to({_off:true},1).wait(2).to({_off:false,x:-30.45},0).to({_off:true},1).wait(2).to({_off:false,x:-27.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.15},0).to({_off:true},1).wait(2).to({_off:false,x:-21},0).to({_off:true},1).wait(2).to({_off:false,x:-17.85},0).to({_off:true},1).wait(2).to({_off:false,x:-14.7},0).to({_off:true},1).wait(2).to({_off:false,x:-11.55},0).to({_off:true},1).wait(2).to({_off:false,x:-8.4},0).to({_off:true},1).wait(2).to({_off:false,x:-5.25},0).to({_off:true},1).wait(2).to({_off:false,x:-2.1},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-98.7},0).to({_off:true},1).wait(2).to({_off:false,x:-95.55},0).to({_off:true},1).wait(2).to({_off:false,x:-92.4},0).to({_off:true},1).wait(2).to({_off:false,x:-89.25},0).to({_off:true},1).wait(2).to({_off:false,x:-86.1},0).to({_off:true},1).wait(2).to({_off:false,x:-82.95},0).to({_off:true},1).wait(2).to({_off:false,x:-79.8},0).to({_off:true},1).wait(2).to({_off:false,x:-76.65},0).to({_off:true},1).wait(2).to({_off:false,x:-73.5},0).to({_off:true},1).wait(2).to({_off:false,x:-70.35},0).to({_off:true},1).wait(2).to({_off:false,x:-67.2},0).to({_off:true},1).wait(2).to({_off:false,x:-64.05},0).to({_off:true},1).wait(2).to({_off:false,x:-60.9},0).to({_off:true},1).wait(2).to({_off:false,x:-57.75},0).to({_off:true},1).wait(2).to({_off:false,x:-54.6},0).to({_off:true},1).wait(2).to({_off:false,x:-51.45},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).to({_off:true},1).wait(2).to({_off:false,x:-45.15},0).to({_off:true},1).wait(2).to({_off:false,x:-42},0).to({_off:true},1).wait(2).to({_off:false,x:-38.85},0).to({_off:true},1).wait(2).to({_off:false,x:-35.7},0).to({_off:true},1).wait(2).to({_off:false,x:-32.55},0).to({_off:true},1).wait(2).to({_off:false,x:-29.4},0).to({_off:true},1).wait(2).to({_off:false,x:-26.25},0).to({_off:true},1).wait(5).to({_off:false,x:-19.95},0).to({_off:true},1).wait(2).to({_off:false,x:-16.8},0).to({_off:true},1).wait(2).to({_off:false,x:-13.65},0).to({_off:true},1).wait(5).to({_off:false,x:-7.35},0).to({_off:true},1).wait(5).to({_off:false,x:-1.05},0).to({_off:true},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_4.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.gr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.green_light();
	this.instance.setTransform(-71.95,-72.2,0.5084,0.5084);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gr, new cjs.Rectangle(-71.9,-72.2,143.9,144.4), null);


(lib.curious = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Findmorewhite();
	this.instance.setTransform(-105,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curious, new cjs.Rectangle(-105,-15,210,29), null);


(lib.bm_splash3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BerminwaterFlower2();
	this.instance.setTransform(-169,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bm_splash3, new cjs.Rectangle(-169,-169,338,338), null);


(lib.bm_splash2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BerminwaterFlower1();
	this.instance.setTransform(-169,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bm_splash2, new cjs.Rectangle(-169,-169,338,338), null);


(lib.bm_splash1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BerminwaterFlower0();
	this.instance.setTransform(-169,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bm_splash1, new cjs.Rectangle(-169,-169,338,338), null);


(lib.bm_pearl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BerminCapsule();
	this.instance.setTransform(-72.75,-74.45,0.6616,0.6616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bm_pearl, new cjs.Rectangle(-72.7,-74.4,145.5,148.8), null);


(lib.bm_new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NewBERMIN();
	this.instance.setTransform(-46.8,-19.5,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bm_new, new cjs.Rectangle(-46.8,-19.5,93.6,39), null);


(lib.bm_bungkus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BerminPack();
	this.instance.setTransform(-95.95,-79.4,0.6616,0.6616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bm_bungkus, new cjs.Rectangle(-95.9,-79.4,191.8,158.8), null);


(lib.bbg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mcberminbg();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9451,scaleY:0.9451},34).to({scaleX:1,scaleY:1},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284,-288.5,568.1,577);


(lib.terea_slide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {bermin:0,perint:35};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
		this.lp_bermint.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/shop/iqos-terea-emerald-edition-paket-10.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_bermint.alpha = 0.05;
	}
	this.frame_69 = function() {
		this.stop();
		this.lp_perint.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/shop/iqos-terea-black-purple-paket-10.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_perint.alpha = 0.05;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(35).call(this.frame_69).wait(1));

	// Layer_5
	this.instance = new lib.mc_time2();
	this.instance.setTransform(-157.05,-277.75,1.5136,1,0,0,0,-52,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("ArGAjQgSAAgNgKQgNgKAAgPIAAAAQAAgOANgKQANgKASAAIWNAAQATAAAMAKQANAKAAAOIAAAAQAAAPgNAKQgMAKgTAAg");
	this.shape.setTransform(78.375,-277.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArGAjQgSAAgNgKQgNgKAAgPIAAAAQAAgOANgKQANgKASAAIWNAAQATAAAMAKQANAKAAAOIAAAAQAAAPgNAKQgMAKgTAAg");
	this.shape_1.setTransform(-78.375,-277.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{x:-157.05}}]}).to({state:[{t:this.shape_1},{t:this.instance,p:{x:-0.35}}]},35).to({state:[{t:this.shape_1},{t:this.instance,p:{x:-0.35}}]},34).wait(1));

	// Layer_10
	this.lp_bermint = new lib.stageBtn();
	this.lp_bermint.name = "lp_bermint";
	this.lp_bermint.setTransform(0.2,146.65,0.9554,0.5305,0,0,0,0.2,0.7);

	this.lp_perint = new lib.stageBtn();
	this.lp_perint.name = "lp_perint";
	this.lp_perint.setTransform(0.2,142.15,0.9554,0.5831,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.lp_bermint}]},34).to({state:[]},1).to({state:[{t:this.lp_perint}]},34).wait(1));

	// Layer_13
	this.instance_1 = new lib.t1_b();
	this.instance_1.setTransform(-0.05,86.75,1.0852,1.0853);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.perint_txt_1();
	this.instance_2.setTransform(-0.05,90,1.1665,1.1667);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({y:77.1,alpha:1},9).to({_off:true},11).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({y:77.1,alpha:1},9).wait(11));

	// Layer_12
	this.instance_3 = new lib.t1_a();
	this.instance_3.setTransform(0.5,-198);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.t2_a();
	this.instance_4.setTransform(0.5,-190.05,0.4109,0.4109);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({y:-214,alpha:1},9).to({_off:true},11).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({y:-214.05,alpha:1},9).wait(11));

	// Layer_11
	this.instance_5 = new lib.bm_new();
	this.instance_5.setTransform(-194.55,-247.5);

	this.instance_6 = new lib.new_pr();
	this.instance_6.setTransform(-194.55,-247.5,0.39,0.39);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-126.2},6).to({_off:true},29).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({_off:false},0).to({x:-126.2},6).wait(29));

	// Layer_15
	this.instance_7 = new lib.pr_pack();
	this.instance_7.setTransform(-12.45,8.8,0.5543,0.5545,-10.6937,0,0,-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.1,regY:0,scaleX:0.296,scaleY:0.296,rotation:0,x:117,y:15.35},9).wait(26).to({regX:-0.3,regY:0.1,scaleX:0.5543,scaleY:0.5545,rotation:-10.6937,x:-12.45,y:8.8},9).wait(26));

	// Layer_7
	this.instance_8 = new lib.bm_bungkus();
	this.instance_8.setTransform(-117.2,15.3,0.4471,0.4474,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.8382,scaleY:0.8383,rotation:-10.6972,x:-12.45,y:8.7},9).wait(26).to({y:15.2},0).to({scaleX:0.4471,scaleY:0.4474,rotation:0,x:-117.2,y:15.3},9).wait(26));

	// Layer_16
	this.instance_9 = new lib.gr();
	this.instance_9.setTransform(134.95,14.2,1.1119,1.1119);
	this.instance_9.alpha = 0.3594;

	this.instance_10 = new lib.prpl();
	this.instance_10.setTransform(-128.25,14.3,0.5673,0.5674,0,0,0,-0.1,0.1);
	this.instance_10.alpha = 0.3594;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},34).to({state:[]},1).to({state:[{t:this.instance_10}]},34).wait(1));

	// Layer_8
	this.instance_11 = new lib.bm_pearl();
	this.instance_11.setTransform(5.4,-67.6,0.6916,0.6916,32.7146,0,0,0.1,-0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.pr_pearl();
	this.instance_12.setTransform(-2.7,-62.8,0.4078,0.4078,32.7132,0,0,-0.1,-0.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8846,scaleY:0.8846,rotation:0,x:85.15,y:-120.2,alpha:1},13).to({_off:true},16).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(41).to({_off:false},0).to({regX:0.3,regY:-0.3,scaleX:0.5408,scaleY:0.5408,rotation:0,x:94.55,y:-116.7,alpha:1},13).wait(16));

	// Layer_6
	this.instance_13 = new lib.bm_splash3();
	this.instance_13.setTransform(-3.25,-57.05,0.6352,0.6352,-90,0,0,0,-0.1);
	this.instance_13._off = true;

	this.instance_14 = new lib.pr_splash3();
	this.instance_14.setTransform(-3.25,-57.05,0.4132,0.4132,-90,0,0,0,-0.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({regY:0,scaleX:0.8846,scaleY:0.8846,rotation:0,x:0.05,y:-64.25},10).to({_off:true},21).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(39).to({_off:false},0).to({regX:0.1,scaleX:0.614,scaleY:0.614,rotation:0,x:1.65,y:-65.7,alpha:1},10).wait(21));

	// Layer_3
	this.instance_15 = new lib.bm_splash2();
	this.instance_15.setTransform(0,-65,0.3691,0.3691);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.pr_splash2();
	this.instance_16.setTransform(0,-65,0.3691,0.3691);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({scaleX:0.8846,scaleY:0.8846,x:0.05,y:-64.25,alpha:1},12).to({_off:true},21).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(37).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:0.614,scaleY:0.614,x:1.65,y:-65.7,alpha:1},12).wait(21));

	// Layer_9
	this.instance_17 = new lib.bm_splash1();
	this.instance_17.setTransform(0,-65,0.2609,0.2609);
	this.instance_17.alpha = 0;

	this.instance_18 = new lib.pr_splash1();
	this.instance_18.setTransform(0,-65,0.1636,0.1636);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:0.8846,scaleY:0.8846,x:0.05,y:-64.25,alpha:1},6).to({_off:true},29).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(35).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:0.614,scaleY:0.614,x:1.65,y:-65.7,alpha:1},6).wait(29));

	// Layer_2
	this.instance_19 = new lib.bbg();
	this.instance_19.setTransform(-4.75,-59.9,0.8803,0.8803);
	this.instance_19.alpha = 0;

	this.instance_20 = new lib.pr_bg();
	this.instance_20.setTransform(0,-60,0.7817,0.7817,0,0,0,0,-0.1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:0.1,regY:-0.1,scaleX:0.8846,scaleY:0.8846,x:0.15,y:-57.65,alpha:1},4).to({_off:true},31).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(35).to({_off:false},0).to({regX:0.1,scaleX:1.1509,scaleY:1.1509,x:0.15,y:-57.65,alpha:1},4).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.2,-313.8,570.2,511.5);


// stage content:
(lib.Terea_storiesv3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,49];
	// timeline functions:
	this.frame_0 = function() {
		this.nxtBtn.alpha = 0.05;
		this.prvBtn.alpha = 0.05;
		
		// Frame list untuk gallery
		this.frameList = [0, 35];
		this.currentIndex = 0;
		
		// Set frame awal
		this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		
		// Tombol Next (normal)
		this.nxtBtn.addEventListener("click", () => {
		    this.currentIndex = (this.currentIndex + 1) % this.frameList.length;
		    this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		});
		
		this.prvBtn.addEventListener("click", () => {
		    this.currentIndex = (this.currentIndex - 1) % this.frameList.length;
		    this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		});
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// Layer_2
	this.instance = new lib.warning();
	this.instance.setTransform(160,457.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer_6
	this.nxtBtn = new lib.stageBtn();
	this.nxtBtn.name = "nxtBtn";
	this.nxtBtn.setTransform(240.05,188.85,0.4777,2.1841,0,0,0,0.1,0.5);

	this.prvBtn = new lib.stageBtn();
	this.prvBtn.name = "prvBtn";
	this.prvBtn.setTransform(80.05,188.85,0.4777,2.1841,0,0,0,0.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prvBtn},{t:this.nxtBtn}]}).wait(50));

	// Layer_5
	this.instance_1 = new lib.curious();
	this.instance_1.setTransform(162.45,411.45,0.5599,0.5599,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// Layer_4
	this.slides = new lib.terea_slide();
	this.slides.name = "slides";
	this.slides.setTransform(160,288.4);

	this.timeline.addTween(cjs.Tween.get(this.slides).wait(50));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313131").s().p("EgbKAoYMAAAhQvMA2VAAAMAAABQvg");
	this.shape.setTransform(161.4,240.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,214.6,396.59999999999997,284.70000000000005);
// library properties:
lib.properties = {
	id: '7EAF8F31844F4A469F9DFC5AE21425EB',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BerminCopy1A.png", id:"BerminCopy1A"},
		{src:"images/BerminGround2.jpg", id:"BerminGround2"},
		{src:"images/BerminPack.png", id:"BerminPack"},
		{src:"images/bermintxt.png", id:"bermintxt"},
		{src:"images/BerminwaterFlower0.png", id:"BerminwaterFlower0"},
		{src:"images/BerminwaterFlower1.png", id:"BerminwaterFlower1"},
		{src:"images/BerminwaterFlower2.png", id:"BerminwaterFlower2"},
		{src:"images/BerminCapsule.png", id:"BerminCapsule"},
		{src:"images/Findmorewhite.png", id:"Findmorewhite"},
		{src:"images/green_light.png", id:"green_light"},
		{src:"images/NewBERMIN.png", id:"NewBERMIN"},
		{src:"images/NewPERMIN.png", id:"NewPERMIN"},
		{src:"images/PerintCopy1A.png", id:"PerintCopy1A"},
		{src:"images/perint_txt.png", id:"perint_txt"},
		{src:"images/PerminGround2.jpg", id:"PerminGround2"},
		{src:"images/PerminPack.png", id:"PerminPack"},
		{src:"images/PerminwaterFlower0.png", id:"PerminwaterFlower0"},
		{src:"images/PerminwaterFlower1.png", id:"PerminwaterFlower1"},
		{src:"images/PerminwaterFlower2.png", id:"PerminwaterFlower2"},
		{src:"images/PerrminCapsule.png", id:"PerrminCapsule"},
		{src:"images/purplelights.png", id:"purplelights"},
		{src:"images/Warning.png", id:"Warning"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7EAF8F31844F4A469F9DFC5AE21425EB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;