let total = 0;

function addItem(){ // js는 html과 관련이 없는데 관련짓기 위해 id값을 js에서 읽어오게 하는 것
    const itemInput = document.getElementById("item");
    const priceInput = document.getElementById("price");
    const countInput = document.getElementById("count");
    const itemList = document.getElementById("itemList");
    const totalPrice = document.getElementById("totalPrice");

    // 각 id 값의 value(=값)를 알기 위해 value를 붙여줌
    const itemValue = itemInput.value;
    const priceValue = priceInput.value;
    const countValue = countInput.value;
    /*
    const priceValue = parseInt(priceInput.value);
    const countValue = parseInt(countInput.value);
    parseInt : 글자값이나 다른 어떤 값을 정수로 변경해주는 메서드
    HTML에 input type = "number" 작성해줘서 parseInt를 사용하지 않아도 숫자값이 들어가지만 다양한 변수를 막아주기 위해 parseInt를 사용하는 것을 권장함
    */
    const totalPriceCount = priceValue * countValue;
    const listItem = document.createElement("li");
    listItem.textContent = `${itemValue} | 가격 : ${priceValue} 원 X ${countValue} = ${totalPriceCount} 원`;
    itemList.appendChild(listItem);

    total += totalPrice;
    totalPriceCount.textContent = total + "원";

    itemInput.value = "";
    priceInput.value = "0";
    countInput.value = "1";
}