//A Container
var container = document.createElement('div');
container.setAttribute('class', 'container');

//A1 Application Heading
var para = document.createElement('p');
para.setAttribute('class', 'heading');
para.innerHTML = 'Enter your date of Birth';

//Attach header to container
container.append(para);

//A2. Results: Container
var results_container = document.createElement('div');
results_container.setAttribute('class', 'result');

//A2.1. Results: Elapsed Time
var display_elapsed = document.createElement('div');
display_elapsed.setAttribute('class', 'elapsed-time');

//A2.2. Results: Age
var display_age = document.createElement('div');
display_age.setAttribute('class', 'age');

//A2.3. Results: Zodiac
var zodaic_div = document.createElement('div');
zodaic_div.setAttribute('id', 'zodiac');

var zodaic_sign = document.createElement('div');
zodaic_sign.setAttribute('id', 'photo');

var zodaic_char = document.createElement('p');
zodaic_char.setAttribute('id', 'characteristic');

//A3. User Input Container
var inputcont = document.createElement('div');
inputcont.setAttribute('class', 'container-input');

//A3.1. User Input : Date of Birth
var date_ele = document.createElement('input');
date_ele.setAttribute('type', 'datetime-local');
date_ele.setAttribute('id', 'dob');
inputcont.appendChild(date_ele)

//A3.2 User Input : Button to click
var button = document.createElement('button');
button.setAttribute('type', 'button');
button.setAttribute('id', 'btn');
button.setAttribute('onclick', 'date_calc(); zodiac();');
button.innerHTML = "Age";
inputcont.appendChild(button);

//Attach input to TOP container
container.append(inputcont);


//Attach results to TOP container
//display_elapsed & displayed_age has been attached to results_container inside the function
//Attached results_container to TOP container
container.append(results_container);

//Attach TOP container to document body
document.body.append(container);

function date_calc() {
    var input = document.getElementById('dob').value
    //console.log(input);
    //console.log(Date.parse(input));

    if (Date.parse(input)) {
        var input_date = new Date(input);
        var current_date = new Date();
        var milli_diff = current_date.getTime() - input_date.getTime();
        var sec_diff = Math.floor(milli_diff / 1000);
        var min_diff = Math.floor(sec_diff / 60);
        var hour_diff = Math.floor(min_diff / 60);
        var day_diff = Math.floor(hour_diff / 24);
        var month_diff = (current_date.getFullYear() - input_date.getFullYear()) * 12 + current_date.getMonth() - input_date.getMonth();
        var year_diff = current_date.getFullYear() - input_date.getFullYear();

        var milli_diff_e = current_date.getMilliseconds() - input_date.getMilliseconds();
        var sec_diff_e = current_date.getSeconds() - input_date.getSeconds();
        var min_diff_e = negative_min_diff();
        var hour_diff_e = negative_hour_diff();
        var day_diff_e = current_date.getDate() - input_date.getDate();
        var month_diff_e = current_date.getMonth() - input_date.getMonth();
        var year_diff_e = current_date.getFullYear() - input_date.getFullYear();

        function negative_hour_diff() {
            if ((current_date.getHours() - input_date.getHours()) < 0) {
                var new_hour_diff = 24 + (current_date.getHours() - input_date.getHours())
                return new_hour_diff
            }

            else {
                var new_hour_diff = (current_date.getHours() - input_date.getHours())
                return new_hour_diff
            }
        }

        function negative_min_diff() {
            if ((current_date.getMinutes() - input_date.getMinutes()) < 0) {
                var new_min_diff = 60 + (current_date.getMinutes() - input_date.getMinutes())
                return new_min_diff
            }

            else {
                var new_min_diff = (current_date.getMinutes() - input_date.getMinutes())
                return new_min_diff
            }
        }

        /*console.log(input_date);
        console.log(current_date);
        console.log(milli_diff);
        console.log(sec_diff);
        console.log(min_diff);
        console.log(hour_diff);
        console.log(day_diff);
        console.log(month_diff);
        console.log(year_diff);*/

        display_elapsed.innerHTML = `<br><b>DOB entered is:</b> ${input_date}<br><br>
        <b>Time elapsed since your birth:</b><br>
        Years: ${year_diff} <br>
        Months: ${month_diff} <br>
        Months: ${day_diff} <br>
        Hours: ${hour_diff} <br>
        Minutes: ${min_diff} <br>
        Seconds: ${sec_diff}  <br>
        Milli Seconds: ${milli_diff} <br>`;

        display_age.innerHTML = `<br><b>You are :</b>
        ${year_diff_e} Years, ${month_diff_e} Months, ${day_diff_e} Days, 
        ${hour_diff_e} Hours, ${min_diff_e} Min., ${sec_diff_e} Sec.,
        ${milli_diff_e} Milli Sec <b>Old.</b><br><br>
        <b>Wish you a happy life ahead!!!</b>`;

    }

    else {
        display_elapsed.innerHTML = "Input date is not valid";
    }
    results_container.appendChild(display_elapsed);
    results_container.appendChild(display_age);
}


function zodiac() {
    var input = document.getElementById('dob').value
    var input_date = new Date(input);
    var birthmonth = input_date.getMonth() + 1;
    var birthday = input_date.getDate() + 1;

    if (birthmonth == 1 && birthday >= 20 || birthmonth == 2 && birthday <= 18
    ) {
        result = ("Aquarius");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Aquarians are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances. Aquarius is a universal sign which makes them public people. Hence Aquarians are often associated with clubs, organizations and forums and enthusiastically participate in intellectual discussions. Aquarians are great communicators as long as they are within their mental realm.";

    }

    if (birthmonth == 2 && birthday >= 19 || birthmonth == 3 && birthday <= 20) {
        result = ("Pisces");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Pisceans live in their imaginary world that barely has a connection with the reality. They love to look at the world through a rosy window. When challenged by reality, Pisceans have the tendency to retreat into their world of imagination.";

    }
    if (birthmonth == 3 && birthday >= 21 || birthmonth == 4 && birthday <= 19) {
        result = ("Aries");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Aries demonstrate strong personality. They have strong leadership qualities and honest and straightforward. Aries often have strong determination and can’t be deterred by failures.Aries are always eager for action. They take up to leadership spontaneously. But they don’t judge the pros and cons of a situation before acting. This also makes them vulnerable.";
    }

    if (birthmonth == 4 && birthday >= 20 || birthmonth == 5 && birthday <= 20) {
        result = ("Taurus");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Taureans are noted for their determination and zeal. It is not easy to distract a Taurian from his goal once he has set his target. He would stay focused on his target and would continuously strive to achieve it.Taureans attach high value to simplicity and functionality. They often live a life that is simple and devoid of luxury.";

    }

    if (birthmonth == 5 && birthday >= 21 || birthmonth == 6 && birthday <= 20
    ) {
        result = ("Gemini");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Geminis are full of duality. They always look to a situation from dual perspective. Geminis are characterized by inconstancy and dual nature. Geminis therefore always stay confused about their feelings.Geminis however are strong communicators and express good control over language. They are often found to have knowledge over several languages.";

    }

    if (birthmonth == 6 && birthday >= 21 || birthmonth == 7 && birthday <= 22) {
        result = ("Cancer");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Cancerians are emotional. Their lives are often inflicted with mood shifts. You can find a Canerian in different moods even during a day.The true emotion of Cancer however is hidden behind their composure. But they are soft creatures and can be hurt easily by unkind words.People of the Cancer zodiac sign can be prone to depression and other mental issues. However, cancers are great family people and enjoy big families around them.";

    }
    if (birthmonth == 7 && birthday >= 23 || birthmonth == 8 && birthday <= 22) {
        result = ("Leo");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Leos are warm spirited. They are full of energy and always eager to jump into action. Leos crave for recognition and admiration. Leos always love to be at the centre of attraction. They strive to reach to the top in whatever they do. Leos always love to be surrounded with large crowd and admirers. However, they are often unkind to criticism and don’t take the words of critics lightly.Leos are very ambitious and choose their acquaintances carefully. They aspire for social recognition.";

    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22) {
        result = ("Virgo");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Virgos have a keen sense of good and bad and for that they are highly discriminating. They have an intuitive sense to identify wrong motives in people. Hence, Virgos exercise extreme caution in what they do.The virgin defines purity and therefore they are endowed with the ability to distinguish the good from the bad. Hence, Virgos are also cleanliness freaks. Despite their intelligence Virgos often remain confused about the decisions they make in their life. Also, you will not find Virgos teeming with activities.";
    }
    if (birthmonth == 9 && birthday >= 23 || birthmonth == 10 && birthday <= 22) {
        result = ("Libra");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Libra is an active sign and members born under the sign are endowed with high energy. But Librans also tend to run out of their energy soon.The Libra is the ‘balance’ and members of this sign have a very balanced mind. They can be found in settling disputes often. Librans always try to maintain harmony and balance. They are also very level headed and have a keen sense for justice. Therefore, their suggestions are often highly sought after by their friends and kins.Librans are two faceted characters. They both have the cheerfulness and darkness in them. Librans have phases of heightened activities but they can easily slip into a phases of complete inactivity and apathy as well.";
    }
    if (birthmonth == 10 && birthday >= 23 || birthmonth == 11 && birthday <= 21) {
        result = ("Scorpio");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Scorpions are most diverse in nature and therefore present the most interesting study. Scorpios hold grudge and would wait patiently for the right moment to strike. They are not likely to forget any act of betrayal or treachery. For Scorpios what is implied is more fascinating than the obvious.Scorpios are often described as egoists. However, some of the positive traits of Scorpios are- diplomacy, intuition, intelligence, engaging, resolute, spirituality and sensitivity.";
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21) {
        result = ("Sagittarius");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Sagittarians are the incurable optimists. They are always looking at the positive side of a thing. Their optimism can’t be dampened by hardships or negative results.Sagittarians often are outdoor people. They will take interest in all sorts of sports and outdoor activities. They are also adventures in nature. Although they are true to their faults but can also turn completely deaf to criticism and turn down suggestions.";
    }

    if (birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19) {

        result = ("Capricorn");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
        document.getElementById("characteristic").innerHTML = "Members of this sign has an insatiable desire to climb higher and during this course they can also become selfish and might not hesitate to sacrifice other’s interests in fulfilling their goals.Capricorns may seem risk averse but in reality they carefully plan all their moves ahead and rehearse them to perfection.";
    } else if (birthmonth > 12 || birthday > 31) {
        alert("Please enter an accurate date ! ");
    }
    // var msg = '<p id= "space"> Your zodiac sign is <span id="output"></span> </p>'
    //results_container.appendChild(msg);
    zodaic_div.append(zodaic_sign);
    zodaic_div.append(zodaic_char);
    results_container.append(zodaic_div);
    //console.log(results_container);
}
