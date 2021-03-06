# Plugins for vimperator.

These were all made by HallaSurvivor (Christopher Grossack) and are available for use and modification for anybody.

---

##mute.js

A plugin to allow muting of tabs from the command line. 
mute is fully functional with or without [tabgroups, by QuickSaver](https://addons.mozilla.org/en-US/firefox/addon/tab-groups-panorama/).

`mute` mutes the current tab, while `mute 3` mutes the third visible tab in the group. 
(note this follows vimperator's convention of 1-indexing)

##tileview\_integration.js

A plugin that integrates vimperator with [tileView, by DW-dev](https://addons.mozilla.org/en-US/firefox/addon/tile-view/).

This allows for a TMUX like experience for firefox. 

The plugin will not work without also installing tileView, linked above.

The aliases provided are intentionally long so as to not collide with preexisting aliases the user may have written. Any binds you prefer can be set up in your .vimperatorrc

`tileA[dd] (u[p] | d[own] | l[eft] | r[ight])`, adds a pane in one of those directions however it is aliased for convenience and muscle memory with `vsplit` and `split`.

Note: by default vim makes `vsplit` open a new pane left of the current one, and `split` open a new pane above the current one. tileview\_integration implements these splits in the reverse order, with `vsplit` opening to the right, and `split` opening below. At the moment there is no way to change this short of modifying the code. However, if even one person asks for it, I'll add a setting. 

`tileEx[pand]` expands the current pane to fill the screen, until it is called again. 

`tileR[emove] [n]` removes a pane from the tiling, current pane by default. 

`q[uit]` overwrites the default q[uit] to make it remove the current pane if there is one, just like vim.

`tileEq[ualize]` equalizes the size of all the panes.

`tileV[iew]` toggles tileView on and off. 
Open panes are remembered between toggles, so this functions similarly to `tileExpand`

`tileS[ync]` toggles the sync scroll mode of the window. 
When tileSync is on, all panes will scroll at the same time.

`tileO[ptions]` opens the tileView addon's menu.

(If enough people ask me to add a particular setting into the vimperator interface, I can add it.)

`tileDefaultLayoutOpen` opens the default layout.

`tileDefaultLayoutSave [0 | 1]` saves the current layout as the default. 
The second argument tells tileView to save the tabs that are open in addition to the layout of the panes. It defaults to 0.

`tileNamedLayoutOpen <name>` opens a saved layout.

`tileNamedLayoutSave <name> [0 | 1]` saves a layout.
The second argument tells tileView to save the tabs that are open in addition to the layout of the panes. It defaults to 0.

`tileNamedLayoutDelete <name>` deletes a saved layout.

`tilePr[elayoutOpen] <layout>` opens a preinstalled layout.

`tileC[lose]` closes the current layout.

`tileFocus <tabNumber>` changes the active panel to the panel with the specified tab.
Autocomplete will list the tabnumbers alongside the tab associated with them.

`tf <tabNumber>` is an alias for tileFocus.

##pocket\_integration.js

A plugin that creates binds for saving pages to Pocket.

While many other plugins implement this behavior, most do it through bookmarklets, or executing directly the javascript that is in the bookmarklets. This plugin implements the behavior through the Firefox-Pocket extension that is now bundled with firefox by default. For this reason, the plugin only works with firefox 41 and higher.

Further, I have yet to find a plugin that implements the "Save Link To Pocket" feature that is part of the context menu of links. So, this plugin exports a hint mode that will save the selected link to pocket.

NOTE: This plugin will only work if the Pocket icon is accessible. This means it must be on a toolbar (which can be hidden via vimperator) or in the menu (which can be hidden by hiding the navigation menu).

`po[cket]` adds the current tab to pocket.

`;p` is a hintmode (the hintmode itself is `p`, but this is accessed with `;p` by default) that saves the selected link to pocket via the hint menu.
