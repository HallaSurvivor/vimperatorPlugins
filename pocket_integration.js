/* A plugin to integrate firefox Pocket with vimperator.
 *
 * Christopher Grossack 2016
 *
 * NOTE: This requires the pocket icon be visible, either
 * in one of the toolbars, or in the menu.
 *
 * This plugin exports one functions and one hint mode
 * to better integrate firefox pocket and vimperator.
 *
 *   - po[cket] adds the current tab to pocket.
 *   
 *   - The new hintmode 'p' will save the selected link to pocket.
 *
 * version 0.1
 *
 * website: https://github.com/HallaSurvivor
 * email: HallaSurvivor@gmail.com
 */

var INFO =
<plugin name="pocket integration" version="0.1"
        href="https://github.com/HallaSurvivor/vimperatorPlugins"
        summary="integration with pocket"
        lalng="en-US"
        xmlns="http://vimperator.org/namespaces/liberator">
  <author email="HallaSurvivor@gmail.com">Christopher Grossack</author>
  <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
  <project name="Vimperator"/>
  <p>This plugin provides a means of saving tabs/links to pocket.</p>
  <item>
    <tags>pocket</tags>
    <spec>pocket<spec>
    <description><p>
      Add open tab to pocket. 
    </p></description>
  </item>
  <item>
    <tags>pocket hint</tags>
    <spec>;p <a>1</a></spec>
  </item>
</plugin>

commands.add(
function pocket_integration()
{
  var gB = window.gBrowser;

  hints.addMode(
    'p',
    "Save a link to pocket.",
    function(elem, loc){ window.Pocket.savePage(gB, loc);}
  );

  commands.add(
    ["po[cket]"],
    "Add the current tab to pocket.",
    function(){ window.Pocket.savePage(gB, window.gLastValidURLStr); }
  );
}

pocket_integration();
