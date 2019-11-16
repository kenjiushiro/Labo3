var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var auto = /** @class */ (function (_super) {
    __extends(auto, _super);
    function auto(ruedas, ventanas) {
        var _this = 
        //Super simil base
        _super.call(this, ruedas) || this;
        _this.cantVentanas = ventanas;
        return _this;
    }
    return auto;
}(Vehiculo));
