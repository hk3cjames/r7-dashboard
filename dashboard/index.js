async function intervalFunc() {
  const res = await fetch("/status");
  const data = await res.json();
  console.log(data.d1);
  console.log(data.d2);
  document.row1.time_counter.value = data.d1;
  document.row2.cycle_counter.value = data.d2;
  document.row3.cycle_in_counter.value = data.d4;
  document.row4.total_hash_counter.value = data.d5;
  document.row5.total_query_counter.value = data.d7;
  document.row6.current_hash.value = data.d8;
  }

  setInterval(intervalFunc, 1000);