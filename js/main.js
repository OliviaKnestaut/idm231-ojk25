const sign_info = [
    {name: 'Aries',
    dates: 'March 21 - April 19',
    text: 'There is nothing an Aries cannot achieve once they set their mind to it—no mountain is too high. However, you will also find them nursing a hidden imposter syndrome that can chip away at their confidence if allowed free rein.'
    },
    {name: 'Taurus',
    dates: 'April 20 - May 20',
    text: 'Loyal to a fault, a Taurean is the most reliable person you can have in your corner when the chips are down. However, they have a stubborn streak a mile wide and can hold a grudge like no one else, so make sure you don’t cross them.'
    },
    {name: 'Gemini',
    dates: 'May 21 - June 20',
    text: 'Throw a Gemini to the wolves, and they will come back leading the pack—the air element in this sign means that they can adapt easily to any situation. But their fuse runs short and once they run out of patience with someone, there is no wiggle room for second chances.'
    },
    {name: 'Cancer',
    dates: 'June 21 - July 22',
    text: 'Behind the brooding fortress that a Cancer has erected to protect themselves are abundant reserves of deep, undying love and loyalty. Pity that few will get to experience it because they aren’t the best at communicating what is in their hearts.'
    },
    {name: 'Leo',
    dates: 'July 23 - August 22',
    text: 'Born to be under the spotlight, there is nothing that this lion enjoys as much as being the cynosure of all eyes. However, this innate conviction that they are always in the right means that they can often run roughshod over others’ feelings and sentiments.'
    },
    {name: 'Virgo',
    dates: 'August 23 - September 22',
    text: 'Meticulous, organised and diligent, if the world were to end tomorrow, you would want a Virgo to lead the march into the new dawn. However, that pesky niggle of self-doubt in their head means that they are often harsher on themselves than anybody else can be.'
    },
    {name: 'Libra',
    dates: 'September 23 - October 22',
    text: 'If you are looking for someone to lend a comforting shoulder during times of distress and truly put themselves in your shoes, ring up the first Libra in your contacts. This empathetic side of theirs can sometimes get derailed by their inability to make up their mind, compounded by a fear of confrontations, which means that you never truly know which side they stand on.'
    },
    {name: 'Scorpio',
    dates: 'October 23 - November 21',
    text: 'The fiery, intense personality of a Scorpio can make any time spent together a wild, dizzying ride. But while they will go the extra mile to take care of your emotional needs, they remain notoriously secretive about their own—good luck cracking open the spine of this closed book.'
    },
    {name: 'Sagittarius',
    dates: 'November 22 - December 21',
    text: 'There is no storyteller quite like a Sagittarius—they can have the entire room hanging on their every word. But while they can show you grand dreams, it can sometimes be hard to pin them down and make them deliver on their promises.'
    },
    {name: 'Capricorn',
    dates: 'December 22 - January 19',
    text: 'Not everyone can conquer the world but if a Cap were to set out to do it, nothing would deter them until they had accomplished their goal. With a personality that is hardwired in practicality, they can often fail to appreciate nuance and are known to be unforgiving of others’ mistakes.'
    },
    {name: 'Aquarius',
    dates: 'January 20 - February 18',
    text: 'A deep-thinker with a humanitarian streak, an Aquarian has grand plans to change the world. Shame that they left the party early though because their reclusive nature makes it hard for them to establish bonds with those around them.'
    },
    {name: 'Pisces',
    dates: 'February 19 - March 20',
    text: 'If you are looking to escape the mundane everyday grind, a Pisces’s imaginative mind can whisk you away into a realm of fantasy. Their kind, nurturing personality can prove to be a double-edged sword though, because their overtly sensitive heart is easily wounded, further compounded by a tendency to play the victim.'
    }
];

const buttons = document.getElementsByClassName("button");
const audio_player = document.getElementById('audio_player');
let sound_name = '';
const audio_file = new Audio(sound_name);
let signIsActive = '';

const helpButton = document.querySelector('.help-button');
let helpOn = false;

//Help Pop-ups
helpButton.addEventListener("click", () => {
    if(!helpOn){
        //Make help visible
        document.getElementById('help-1').style.visibility = "visible";
        document.getElementById('help-2').style.visibility = "visible";
        console.log('Help On');
        helpOn = true;
    }
    else{
        //Hide help
        document.getElementById('help-1').style.visibility = "hidden";
        document.getElementById('help-2').style.visibility = "hidden";
        console.log('Help Off');
        helpOn = false;
    }
});


//Button Selection

for (let button of buttons) {
    button.addEventListener("click", function(e) {
        if(signIsActive != e.target.id){
            console.log(e.target.id);
            //Change img, text, and play audio
            changeMedia(e.target.id);
            //Change active sign
            signIsActive = e.target.id;

            //Hide Help when selection made
            if(helpOn){
                //Hide help
                document.getElementById('help-1').style.visibility = "hidden";
                document.getElementById('help-2').style.visibility = "hidden";
                console.log('Help Off');
                helpOn = false;
            }
        }
        else{
            //Unclick
            document.querySelector('.zodiac-image').src = '';
            document.getElementById('sign-title').innerHTML = '';
            document.getElementById('sign-dates').innerHTML = '';
            document.getElementById('sign-text').innerHTML = '';
            audio_player.pause();
            console.log('Reverted');
            signIsActive = '';
        }
    });
}

//Form Submission
const form = document.querySelector('form');

function handle_submit(event){
    event.preventDefault();

    //Hide on date entry
    if(helpOn){
        document.getElementById('help-1').style.visibility = "hidden";
        document.getElementById('help-2').style.visibility = "hidden";
        console.log('Help Off');
        helpOn = false;
    }

    console.log('Form submission:');
    console.log(form?.elements);
    console.log(form?.elements['birthday'].value);

    const month = Number(form.elements['birthday'].value.split('-')[1]);
    const day = Number(form.elements['birthday'].value.split('-')[2]);
    console.log(month, day);
    let sign = 'none';

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)){
        sign = 'capricorn';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        sign = 'sagittarius';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        sign = 'scorpio';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        sign = 'libra';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        sign = 'virgo';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        sign = 'leo';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        sign = 'cancer';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        sign = 'gemini';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        sign = 'taurus';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        sign = 'aries';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        sign = 'pisces';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        sign = 'aquarius';
    }

    changeMedia(sign);
}

if (form){
    form.addEventListener('submit', handle_submit, false);
}

//Change Media on Site

function changeMedia(sign) {
    //change img
    document.querySelector('.zodiac-image').src = `images/${sign}-img.svg`;
    console.log(`images/${sign}-img.svg`);
    //change text
    let signText = findSign(sign);
    console.log(signText);
    document.getElementById('sign-title').innerHTML = signText[0];
    document.getElementById('sign-dates').innerHTML = signText[1];
    document.getElementById('sign-text').innerHTML = signText[2];
    //play audio

    //HOW DO I USE THIS "CAN PLAY THROUGH THINGIE"
    audio_file?.addEventListener("canplaythrough", () => {
        console.log('canplaythrough');
    });

    console.log(`sounds/${sign}-audio.mp3`);
    if (audio_player != null) {
        if (audio_player && !audio_player.paused){
            audio_player.pause();
        }
        audio_player.currentTime = 0;
        audio_player.src = `sounds/${sign}-audio.mp3`;
        audio_player.play();
    }
}

function findSign(calledSign) {
    //search array for object
    for (let sign of sign_info) {
        if(sign.name.toLowerCase() === calledSign){
            let signText = [sign.name, sign.dates, sign.text];
            return signText;
        }
    }
}