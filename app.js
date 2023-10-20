$(document).ready(function () {
    const jumpBtn = $("#jump");
    const rightInput = $("#right");
    const leftInput = $("#left");
    jumpBtn.on("click", switchFunc);

    function switchFunc() {
        let rightVal = rightInput.val();
        let leftVal = leftInput.val();
        if (jumpBtn.val() === "jump >") {
            jumpBtn.val("< jump");
        } else {
            jumpBtn.val("jump >");
        }

        let temp = rightVal;
        rightVal = leftVal;
        leftVal = temp;

        leftInput.val(leftVal);
        rightInput.val(rightVal);
    }
});


