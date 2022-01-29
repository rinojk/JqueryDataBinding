var state = {};
var stateManager = new StateManager(state);

$(document).ready(function () {
    $('[model-bind]').change(function () {
        stateManager.updateState($(this).attr("model-bind"), $(this).val());
    })

    initState();
})

//Optionally. This function will create properties in accordance to defined "model-bind" tags in view
function initState() {
    var fields = $('[model-bind]').map(function () {
        return $(this).attr("model-bind")
    }).get();
    console.log(fields);
    stateManager.init(fields)
}