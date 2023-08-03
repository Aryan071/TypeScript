// let a = "Aryan";
// console.log(a);
// let sum = (a:number,b:number) =>{
//   return a+b;
// }
// console.log(sum(12,34));
// let name1 :undefined = undefined;
// let name2 :null = null;
// // name1 = 6;
// let ab:number = NaN;
// console.log(ab);
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var _this = this;
// let x:number = 5;
// console.log(x);
// const add = (a:number,b:number) =>{
//   return a+b;
// }
// console.log(add(3,5));
// const todayWeather = {
//   date:new Date(),
//   weather:'sunny'
// };
// const forecast = ({date,weather} : {date:Date , weather:string}) =>{
//   console.log(date);
//   console.log(weather);
// };
// forecast(todayWeather);
// const  greet = (name:string) => {
//   console.log(`Welcome ${name}`);
// }
// const  greet = (name:string):string => {
//   return `Welcome ${name}`;
// }
// function greet(name:string):string{
//  return `welcome ${name}`;
// }
// greet('Aryan');
// function add<t>(a:t,b:t){
// }
var boat = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _pilot_decorators;
    return _a = /** @class */ (function () {
            function boat() {
                this.color = (__runInitializers(this, _instanceExtraInitializers), 'red');
            }
            Object.defineProperty(boat.prototype, "getColor", {
                get: function () {
                    return "The color oh boat is ".concat(this.color);
                },
                enumerable: false,
                configurable: true
            });
            boat.prototype.pilot = function () {
                console.log("Hyyy");
            };
            return boat;
        }()),
        (function () {
            _pilot_decorators = [testDecorator];
            __esDecorate(_a, null, _pilot_decorators, { kind: "method", name: "pilot", static: false, private: false, access: { has: function (obj) { return "pilot" in obj; }, get: function (obj) { return obj.pilot; } } }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
function testDecorator(target, key) {
    console.log("Target: ", target);
    console.log("Key: ", key);
}
