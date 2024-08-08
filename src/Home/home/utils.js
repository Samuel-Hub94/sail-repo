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
            return 'src/Home/home/images/icon-facebook.svg'; // Adjust the path
        case 'instagram':
            return 'src/Home/home/images/icon-instagram.svg'; // Adjust the path
        case 'twitter':
            return 'src/Home/home/images/icon-twitter.svg'; // Adjust the path
        case 'youtube':
            return 'src/Home/home/images/icon-youtube.svg'; // Adjust the path
        default:
            return 'src/Home/home/images/icon-facebook.svg'; // Adjust the path
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
