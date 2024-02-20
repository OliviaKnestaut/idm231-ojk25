const sign_info = [
    {sign: 'Aries',
    dates: 'March 21 - April 19',
    text: 'There is nothing an Aries cannot achieve once they set their mind to it—no mountain is too high. However, you will also find them nursing a hidden imposter syndrome that can chip away at their confidence if allowed free rein.'
    },
    {sign: 'Taurus',
    dates: 'April 20 - May 20',
    text: 'Loyal to a fault, a Taurean is the most reliable person you can have in your corner when the chips are down. However, they have a stubborn streak a mile wide and can hold a grudge like no one else, so make sure you don’t cross them.'
    },
    {sign: 'Gemini',
    dates: 'May 21 - June 20',
    text: 'Throw a Gemini to the wolves, and they will come back leading the pack—the air element in this sign means that they can adapt easily to any situation. But their fuse runs short and once they run out of patience with someone, there is no wiggle room for second chances.'
    },
    {sign: 'Cancer',
    dates: 'June 21 - July 22',
    text: 'Behind the brooding fortress that a Cancer has erected to protect themselves are abundant reserves of deep, undying love and loyalty. Pity that few will get to experience it because they aren’t the best at communicating what is in their hearts.'
    },
    {sign: 'Leo',
    dates: 'July 23 - August 22',
    text: 'Born to be under the spotlight, there is nothing that this lion enjoys as much as being the cynosure of all eyes. However, this innate conviction that they are always in the right means that they can often run roughshod over others’ feelings and sentiments.'
    },
    {sign: 'Virgo',
    dates: 'August 23 - September 22',
    text: 'Meticulous, organised and diligent, if the world were to end tomorrow, you would want a Virgo to lead the march into the new dawn. However, that pesky niggle of self-doubt in their head means that they are often harsher on themselves than anybody else can be.'
    },
    {sign: 'Libra',
    dates: 'September 23 - October 22',
    text: 'If you are looking for someone to lend a comforting shoulder during times of distress and truly put themselves in your shoes, ring up the first Libra in your contacts. This empathetic side of theirs can sometimes get derailed by their inability to make up their mind, compounded by a fear of confrontations, which means that you never truly know which side they stand on.'
    },
    {sign: 'Scorpio',
    dates: 'October 23 - November 21',
    text: 'The fiery, intense personality of a Scorpio can make any time spent together a wild, dizzying ride. But while they will go the extra mile to take care of your emotional needs, they remain notoriously secretive about their own—good luck cracking open the spine of this closed book.'
    },
    {sign: 'Sagittarius',
    dates: 'November 22 - December 21',
    text: 'There is no storyteller quite like a Sagittarius—they can have the entire room hanging on their every word. But while they can show you grand dreams, it can sometimes be hard to pin them down and make them deliver on their promises.'
    },
    {sign: 'Capricorn',
    dates: 'December 22 - January 19',
    text: 'Not everyone can conquer the world but if a Cap were to set out to do it, nothing would deter them until they had accomplished their goal. With a personality that is hardwired in practicality, they can often fail to appreciate nuance and are known to be unforgiving of others’ mistakes.'
    },
    {sign: 'Aquarius',
    dates: 'January 20 - February 18',
    text: 'A deep-thinker with a humanitarian streak, an Aquarian has grand plans to change the world. Shame that they left the party early though because their reclusive nature makes it hard for them to establish bonds with those around them.'
    },
    {sign: 'Pisces',
    dates: 'February 19 - March 20',
    text: 'If you are looking to escape the mundane everyday grind, a Pisces’s imaginative mind can whisk you away into a realm of fantasy. Their kind, nurturing personality can prove to be a double-edged sword though, because their overtly sensitive heart is easily wounded, further compounded by a tendency to play the victim.'
    }
]

const buttons = document.getElementsByClassName("button");

const buttonPressed = e => {
    console.log(e.target.id);
    let sign = e.target.id;
    document.querySelector('.zodiac-image').src = `images/${sign}-img.svg`;
    console.log(`images/${sign}-img.svg`);

}

for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
}




const btn_play = document.getElementById('btn9_play');

const audio_element = new Audio(sound_file);
const audio_player = document.getElementById('audio_player');

function play_audio(audio_element, src){
    if (audio_element && !audio_element.paused){
        audio_element.pause();
    }
    audio_element.currentTime = 0;
    audio_element.src = src;
    audio_element.play();
}

audio_element?.addEventListener('canplaythrough', (event) =>{
    //console.log('can play through');

    btn_play?.addEventListener('click', ()=>{
        if (audio_player != null) {
            play_audio(audio_player, sound_file);
        }
    });
});



const form = document.querySelector('form');
const error_list = document.querySelector('.errors');

function log_birthday(birthday){
    //console.log(birthday);
    const date = {
        year: birthday[0],
        month: birthday[1],
        day: birthday[2]
    }
    return date;    
}

function handle_submit(event){
    event.preventDefault();
    //console.log('form submission');
    //console.log(form);
    //console.log(form.elements);
    //console.log(form.elements['birthday'].value);
    //console.groupEnd();

    const errors = [];

    //error checking: is b day valid

    if(errors.length){
        errors.forEach((error) => {
            const li = document.createElement('li');
            const text = doucment.createTextNode('error');

            li.appendChild(text);
            error_list.appendChild(li);
            error_list.hidden = false;
        });
        return false;
    }else{
        error_list.hidden = true;
        error_list.innerHTML = '';
    }

    const date_object = log_birthday(form.elements['birthday'].value.split('-'));
    //console.log(date_object.day);

}

if (form){
    form.addEventListener('submit', handle_submit);
}
