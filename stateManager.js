class StateManager {
    _state = {};
    constructor(state) {
        this._state = state;
    }

    init(propertiesArray){
        var outerScope = this;
        propertiesArray.forEach(function(property){
            outerScope.updateState(property, {});
        })
    }

    updateState(property, value) {
        var properties = property.split(".");
        var parentObj = this._state;
        properties.forEach((prop, index) => {
            if (index == (properties.length - 1)) {
                StateManager.updateProperty(parentObj, prop, value)
            }
            else {
                parentObj = StateManager.getObject(parentObj, prop)
            }
        });
    }

    static updateProperty(parentObj, propertyName, value) {
        if (value != null) {
            Reflect.set(parentObj, propertyName, value);
        }
    }

    static getObject(parentObj, propertyName) {
        if (!Reflect.has(parentObj, propertyName)) {
            Reflect.defineProperty(parentObj, propertyName, {value:{}, writable: true, configurable: true })
        }
        return Reflect.get(parentObj, propertyName);
    }
}