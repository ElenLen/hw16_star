"use strict";

const listAuto = document.getElementById("markAuto");

// выбор марки авто и отстаривание списка моделей
listAuto.onchange = function () {
  const modReno = [
    [100000, "modelReno_1"],
    [110000, "modelReno_2"],
    [120000, "modelReno_3"],
  ];

  const modOpel = [
    [200000, "modelOpel_1"],
    [210000, "modelOpel_2"],
    [220000, "modelOpel_3"],
  ];

  const modMazda = [
    [300000, "modelMazda_1"],
    [310000, "modelMazda_2"],
    [320000, "modelMazda_3"],
  ];

  const modJaguar = [
    [400000, "modelJaguar_1"],
    [410000, "modelJaguar_2"],
    [420000, "modelJaguar_3"],
  ];

  let values = [];

  let select = document.getElementById("modAuto");
  select.innerHTML = "";

  //выбранное значение
  const value = listAuto.value;

  if (value == 0) {
    // если задано значение "Не выбрано", то блокируем выбор модели авто
    select.disabled = true;
    return;
  } else if (value == 1) {
    // если выбрана марка, то отстраиваем модели этой марки
    values = [...modReno];
  } else if (value == 2) {
    values = [...modOpel];
  } else if (value == 3) {
    values = [...modMazda];
  } else if (value == 4) {
    values = [...modJaguar];
  }

  // снимаем блокировку поля с возможностью выбора модели
  select.disabled = false;

  // отстраиваем список моделей
  for (const val of values) {
    var option = document.createElement("option");
    option.value = val[0];
    option.text = val[1];
    select.appendChild(option);
  }
};

const statAuto = document.getElementById("statuAuto");

// выбираем статус авто
statAuto.addEventListener("input", function () {
  const radio1 = document.getElementById("new").checked;
  const radio2 = document.getElementById("old").checked;

  const ownOld = [
    [-100, "1-2 владельца"],
    [-300, "более 3-х владельцев"],
  ];
  let values = [];

  // если подержанный, то отстраиваем список
  let select = document.getElementById("owner");
  // console.log(select);
  select.innerHTML = "";

  //получаем то, что выбрал пользователь.
  // console.log("radio1= " + radio1);
  // console.log("radio2= " + radio2);

  if (radio1 == true) {
    select.disabled = true;
    return;
  } else if (radio2 == true) {
    values = [...ownOld];
  }

  select.disabled = false;

  for (const val of values) {
    var option = document.createElement("option");
    option.value = val[0];
    option.text = val[1];
    select.appendChild(option);
  }
});

// Создайте функцию, которая будет вызываться при изменении любого элемента калькулятора
document.getElementById("Auto").onchange = () => {
  //считаем цену
  // значение выбранной марки авто
  const value = listAuto.value;
  console.log("listAuto.value= " + value);
  //получаем то, что пользователь выбрал
  if (value == 0) {
    document.getElementById("container").innerHTML = "";
    return;
    //если "Не выбрано", то очищаем старую цену.
  } else {
    // модель авто
    const initialPrice = document.getElementById("modAuto").value;
    console.log("initialPrice= " + initialPrice);
    //тип топлива
    const calTypeFuel = document.querySelectorAll("input[name=fuel]:checked")[0]
      .value;
    console.log("calTypeFuel= " + calTypeFuel);

    // объем топлива typeFuel
    const calVolFuel = document.getElementById("typeFuel").value;
    console.log("calVolFuel= " + calVolFuel);

    // статус авто, новы\старый
    const stat = document.getElementById("new");
    //если новый
    const calStat = stat.checked ? stat.value : 0;
    console.log("calStat= " + calStat);
    //если новый +, если нет присваиваем 0

    // если не новый от вида владельцев минусуем
    const calOwner = document.getElementById("owner").value;
    console.log("calOwner= " + calOwner);

    // тип оплаты statusPay
    const calPay = document.querySelectorAll("input[name=statusPay]:checked")[0]
      .value;
    console.log("calPay= " + calPay);

    // суммируем показатели
    document.getElementById("container").innerText = `Итого: ${
      Number(initialPrice) +
      Number(calTypeFuel) * Number(calVolFuel) +
      Number(calStat) +
      Number(calOwner) +
      Number(calPay)
    } руб.`;
  }
};
