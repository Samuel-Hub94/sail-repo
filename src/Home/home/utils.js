// src/Home/home/utils.js

import facebookIcon from './images/icon-facebook.svg';
import instagramIcon from './images/icon-instagram.svg';
import twitterIcon from './images/icon-twitter.svg';
import youtubeIcon from './images/icon-youtube.svg';

export const getBorderColor = (platform) => {
    switch (platform.toLowerCase()) {
        case 'facebook':
            return '#1DA1F2'; // Facebook blue
        case 'twitter':
            return '#3b5998'; // Twitter blue
        case 'youtube':
            return '#FF0000'; // YouTube red
        default:
            return '#000'; // Default black
    }
};

export const getImgSrc = (platform) => {
    switch (platform.toLowerCase()) {
        case 'facebook':
            return facebookIcon;
        case 'instagram':
            return instagramIcon;
        case 'twitter':
            return twitterIcon;
        case 'youtube':
            return youtubeIcon;
        default:
            return facebookIcon;
    }
};

export const getPlatformClass = (platform) => {
    switch (platform.toLowerCase()) {
        case 'facebook':
            return 'facebook-class'; // Replace with the actual class name
        case 'instagram':
            return 'instagram-class'; // Replace with the actual class name
        case 'twitter':
            return 'twitter-class'; // Replace with the actual class name
        case 'youtube':
            return 'youtube-class'; // Replace with the actual class name
        default:
            return ''; // Replace with the actual class name
    }
};
