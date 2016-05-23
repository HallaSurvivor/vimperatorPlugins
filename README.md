# Plugins that I've made for vimperator.

These were all made by HallaSurvivor (Christopher Grossack) and are available for use and modification for anybody.

---

##mute.js

A plugin to allow muting of tabs from the command line. <br>
mute is fully functional with or without tabgroups, by QuickSaver: <br>
https://addons.mozilla.org/en-US/firefox/addon/tab-groups-panorama/
<br><br><br>

`mute` mutes the current tab, while `mute 3` mutes the third visible tab in the group. <br>
(note this follows vimperator's convention of 1-indexing)

##tileview\_integration.js

A plugin that integrates vimperator with tileView, by DW-dev. <br>
https://addons.mozilla.org/en-US/firefox/addon/tile-view/

This allows for the a TMUX like experience for firefox. <br>

The plugin will not work without also installing tileView, linked above.

The aliases provided are intentionally long so as to not pollute the<br>
vimperator namespace. Any binds the you prefer can be set up in your .vimperatorrc
<br><br><br>

`tileA[dd] (u[p] | d[own] | l[eft] | r[ight])`, adds a pane in one of those directions<br>
however it is aliased for convenience and muscle memory with `vsplit` and `split`.<br>

Note: by default vim makes `vsplit` open a new pane left of the current one, <br>
and `split` open a new pane above the current one. tileview\_integration implements <br>
these splits in the reverse order, with `vsplit` opening to the right, and <br>
`split` opening below. At the moment there is no way to change this short of <br>
modifying the code. However, if even one person asks for it, I'll add a setting. <br>

`tileEx[pand]` expands the current pane to fill the screen, until it is called again. <br>

`tileR[emove]` removes a pane from the tiling. <br>

Note: I wanted to bind this to q as well, to immitate the default behavior of vim, <br>
however q is already used to close a tab by vimperator, and this led to buggy behavior <br>
for vimperator and tileview\_integration. <br>
You can, however, bind :q to :tr in your .vimperatorrc

`tileEq[ualize]` equalizes the size of all the panes.

`tileV[iew]` toggles tileView on and off. <br>
Open panes are remembered between toggles, so this functions similarly to `tileExpand`

`tileS[ync]` toggles the sync scroll mode of the window. <br>
When tileSync is on, all panes will scroll at the same time.

`tileO[ptions]` opens the tileView addon's menu.

(If enough people ask me to add a particular setting into the <br>
vimperator interface, I can add it.)

`tileDefaultLayoutOpen` opens the default layout.
The second argument tells tileView to save the tabs that are open <br>
in addition to the layout of the panes. It defaults to 0.

`tileDefaultLayoutSave [0 | 1]` saves the current layout as the default.

`tileNamedLayoutOpen <name>` opens a saved layout.

`tileNamedLayoutSave <name> [0 | 1]` saves a layout.<br>
The second argument tells tileView to save the tabs that are open <br>
in addition to the layout of the panes. It defaults to 0.

`tileNamedLayoutDelete <name>` deletes a saved layout.

`tilePr[elayoutOpen] <layout>` opens a preinstalled layout.

`tileC[lose]` closes the current layout.

`tileFocus <tabNumber>` changes the active tab to the specified number.<br>
Autocomplete will list the tabnumbers alongside the tab associated with them.
