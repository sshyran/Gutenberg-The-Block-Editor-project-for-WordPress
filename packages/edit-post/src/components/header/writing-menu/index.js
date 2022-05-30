/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { MenuGroup } from '@wordpress/components';
import { __, _x } from '@wordpress/i18n';
import { useViewportMatch } from '@wordpress/compose';
import { displayShortcut } from '@wordpress/keycodes';
import { PreferenceToggleMenuItem } from '@wordpress/preferences';
import { store as blockEditorStore } from '@wordpress/block-editor';

function WritingMenu() {
	const hasReducedUI = useSelect(
		( select ) => select( blockEditorStore ).getSettings().hasReducedUI,
		[]
	);
	const isLargeViewport = useViewportMatch( 'medium' );
	if ( ! isLargeViewport ) {
		return null;
	}

	return (
		<MenuGroup label={ _x( 'View', 'noun' ) }>
			<PreferenceToggleMenuItem
				scope="core/edit-post"
				disabled={ hasReducedUI }
				name="fixedToolbar"
				label={ __( 'Top toolbar' ) }
				info={ __(
					'Access all block and document tools in a single place'
				) }
				messageActivated={ __( 'Top toolbar activated' ) }
				messageDeactivated={ __( 'Top toolbar deactivated' ) }
			/>
			<PreferenceToggleMenuItem
				scope="core/edit-post"
				name="focusMode"
				label={ __( 'Spotlight mode' ) }
				disabled={ hasReducedUI }
				info={ __( 'Focus on one block at a time' ) }
				messageActivated={ __( 'Spotlight mode activated' ) }
				messageDeactivated={ __( 'Spotlight mode deactivated' ) }
			/>
			<PreferenceToggleMenuItem
				scope="core/edit-post"
				name="fullscreenMode"
				label={ __( 'Fullscreen mode' ) }
				disabled={ hasReducedUI }
				info={ __( 'Show and hide admin UI' ) }
				messageActivated={ __( 'Fullscreen mode activated' ) }
				messageDeactivated={ __( 'Fullscreen mode deactivated' ) }
				shortcut={ displayShortcut.secondary( 'f' ) }
			/>
			<PreferenceToggleMenuItem
				scope="core/edit-post"
				name="reducedUI"
				label={ __( 'Distraction free' ) }
				info={ __( 'Work without distraction' ) }
				messageActivated={ __( 'Distraction free mode activated' ) }
				messageDeactivated={ __( 'Distraction free mode deactivated' ) }
				shortcut={ displayShortcut.secondary( '\\' ) }
			/>
		</MenuGroup>
	);
}

export default WritingMenu;
