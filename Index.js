function calculateDays() {
    const date = document.getElementById("dob").value;
    const birthday = new Date(date);
    const today = new Date();
    const difference = today - birthday;
    const days = Math.floor(difference / (24*60*60*1000));
    document.getElementById("result").innerHTML = days;
    console.log(days);
}