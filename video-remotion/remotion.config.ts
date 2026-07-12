import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
// Kualitas tinggi untuk submission (guideline: min 1920x1080)
Config.setCrf(18);
