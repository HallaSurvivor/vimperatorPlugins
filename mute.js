/*
 * A plugin to mute a tab
 *
 * Christopher Grossack, 2016
 *
 * website: https://github.com/HallaSurvivor
 * email: HallaSurvivor@gmail.com
 *
 * version 0.1
 *
 * Commands:
 *
 * mute [n]
 *  mute tab n (current tab by default)
 *
 */

commands.add(
  ["mute"],
  "Mute a tab. (Mutes current tab by default)",
  function(n) 
  {
    if(!n || n <= 0 || n > config.tabbrowser.visibleTabs.length)
    {
      window.gBrowser.mCurrentTab.toggleMuteAudio();
    }
    else
    {
      // JS indexes from 0, vimperator indexes from 1
      config.tabbrowser.visibleTabs[n - 1].toggleMuteAudio();
    }
  }
);
