const statuses = [
    {
        "id": 1377253490989400000,
        "text": "RT @talesneverland: warrior cats fans be like “man this dude is so fucking annoying” https://t.co/g5WvWcVmDW",
        "retweet_count": 1793,
        "screen_name": "MAFUEMUU",
        "image_url": "http://pbs.twimg.com/media/ExuMeuYWYAAKHFX.jpg"
    },
    {
        "id": 1377253490515345400,
        "text": "RT @tabby_tuxedocat: Sound on for this one 😭 My heart 🥰 #kitten #CatsOfTwitter #cats #Tuesday https://t.co/ytdjK59x3D",
        "retweet_count": 107,
        "screen_name": "dess7214",
        "image_url": "http://pbs.twimg.com/ext_tw_video_thumb/1377036884514377729/pu/img/wkXDJqYZIBYs2gK4.jpg"
    },
    {
        "id": 1377253483523436500,
        "text": "RT @GeneUz21: Just want to say this to get it out of my chest... Happily 🥰 \nProud to be A’tin💙💙🥰🥰\n\n@SB19Official #SB19\n#UziCats @uzi_cats h…",
        "retweet_count": 295,
        "screen_name": "GemAndaya1"
    },
    {
        "id": 1377253477068333000,
        "text": "@Leslieannursua @SB19Official @uzi_cats @nek_suson @chicKennosus \n\n@SB19Official\n#StanWorld #SB19… https://t.co/kNOHflEP3j",
        "retweet_count": 0,
        "screen_name": "Fhelgren09"
    },
    {
        "id": 1377253473348161500,
        "text": "RT @Signs2323: Everyone Keep watching #ZackSnydersJusticeLeague #SnyderCut on repeat! \n#Deathstroke \n#RestoreTheSnyderVerse https://t.co/yD…",
        "retweet_count": 15,
        "screen_name": "Pretty_Cats_PW"
    },
    {
        "id": 1377253469107617800,
        "text": "RT @ulat_bulu_bulu: Beautiful cats.\n\n📷 : siberian_reinhardt | instagram https://t.co/MC1pebCdLw",
        "retweet_count": 5164,
        "screen_name": "rollyneee",
        "image_url": "http://pbs.twimg.com/media/Exw8f79VcAApfxs.jpg"
    },
    {
        "id": 1377253458579845000,
        "text": "RT @iHugMajima: i like it when cats mischievously steal food https://t.co/Ycvz94q11E",
        "retweet_count": 25422,
        "screen_name": "mackypwark",
        "image_url": "http://pbs.twimg.com/media/Exq7zvDWUAc8X--.jpg"
    },
    {
        "id": 1377253457099419600,
        "text": "RT @talesneverland: warrior cats fans be like “man this dude is so fucking annoying” https://t.co/g5WvWcVmDW",
        "retweet_count": 1793,
        "screen_name": "ryupaa",
        "image_url": "http://pbs.twimg.com/media/ExuMeuYWYAAKHFX.jpg"
    },
    {
        "id": 1377253454645715000,
        "text": "@carrie4502 @Errriee Yeah I have several diffusers.  My dog started throwing up years ago when I had it running wit… https://t.co/pUEKOn8geT",
        "retweet_count": 0,
        "screen_name": "RealityTVBliss"
    },
    {
        "id": 1377253453622255600,
        "text": "RT @esbb19_: @Cats_lovesESBI @SB19Official \"Remember that, wherever you heart is, there you will your treasure\" - Stell\n\n@SB19Official\n#Sta…",
        "retweet_count": 1,
        "screen_name": "Cats_lovesESBI"
    },
    {
        "id": 1377253453106442200,
        "text": "RT @itsnotzo: if your mom tells you no cats at home don’t do it. she threatens him daily. https://t.co/OYT3FHwZRe",
        "retweet_count": 18027,
        "screen_name": "ROkpokam",
        "image_url": "http://pbs.twimg.com/media/ExpWnzKW8AwjMrC.jpg"
    },
    {
        "id": 1377253443878944800,
        "text": "RT @straynations: so he can rap sing dance loves cats is good with children AND can cook? https://t.co/ZXSBJZghDX",
        "retweet_count": 982,
        "screen_name": "JOONG0TH",
        "image_url": "http://pbs.twimg.com/media/ExzbxQIVcAUuA46.jpg"
    },
    {
        "id": 1377253440015962000,
        "text": "RT @talesneverland: Warriored Cats https://t.co/PBilg70brZ",
        "retweet_count": 4,
        "screen_name": "XavlegFan",
        "image_url": "http://pbs.twimg.com/media/Exz6Hj7XAAAWgBh.jpg"
    },
    {
        "id": 1377253434802401300,
        "text": "RT @ulat_bulu_bulu: Beautiful cats.\n\n📷 : siberian_reinhardt | instagram https://t.co/MC1pebCdLw",
        "retweet_count": 5164,
        "screen_name": "farhanasutan",
        "image_url": "http://pbs.twimg.com/media/Exw8f79VcAApfxs.jpg"
    }
];

/**
 * 
 * Using any of the tools at your disposal, complete the following:
 *   1. create a function that returns a list of all of the image_urls
 *   2. create a function that returns a list of screen_names of 
 *      statuses with at least 500 retweets.
 *   3. create a function that returns the status with the most retweets.
 *   4. create a function that returns the total number of retweets 
 *      (across all of the statuses in the list).
 */

// 1. create a function that returns a list of all of the image_urls
const getImageUrls = (my_list) => {
    return my_list
        .map(item => item.image_url)
        .filter(item => item !== undefined);
};
console.log(getImageUrls(statuses));

// 2. create a function that returns a list of screen_names
// statuses with at least 500 retweets.
const getPopularScreenNames = (my_list) => {
    return my_list
        .filter(item => item.retweet_count >= 500)
        .map(item => item.screen_name);
};
console.log(getPopularScreenNames(statuses));

// 3. create a function that returns the status with the most retweets.
const getMostPopularStatus = (my_list) => {
    return my_list.reduce((a, b) => {
        if (a.retweet_count > b.retweet_count) {
            return a;
        }
        return b;
    })
};
console.log('The most popular status is:', getMostPopularStatus(statuses));

// 4. create a function that returns the total number of retweets 
//   (across all of the statuses in the list).
const getTotalRetweetCount = (my_list) => {
    return my_list
        .map(item => item.retweet_count)
        .reduce((a, b) => a + b);
};
console.log('The total number of retweets is:', getTotalRetweetCount(statuses));
