
import { ConnectionSettingsTemplate } from './settings/connection.js';
import { GeneralSettingsTemplate } from './settings/general.js';
import { AppearanceSettingsTemplate } from './settings/appearance.js';
import { ShortcutsSettingsTemplate } from './settings/shortcuts.js';
import { DataManagementSettingsTemplate } from './settings/data_management.js';
import { AboutSettingsTemplate } from './settings/about.js';

export const SettingsTemplate = `
    <!-- SETTINGS -->
    <div id="settings-modal" class="settings-modal">
        <div class="settings-content">
            <div class="settings-header">
                <h3 data-i18n="settingsTitle">Settings</h3>
                <button id="close-settings" class="icon-btn small" data-i18n-title="close" title="Close">✕</button>
            </div>
            <div class="settings-body">
                ${ConnectionSettingsTemplate}
                ${GeneralSettingsTemplate}
                ${AppearanceSettingsTemplate}
                ${ShortcutsSettingsTemplate}
                ${DataManagementSettingsTemplate}
                ${AboutSettingsTemplate}
            </div>
        </div>
    </div>

    <!-- UNSAVED CHANGES CONFIRM DIALOG -->
    <div id="unsaved-confirm-modal" class="confirm-modal">
        <div class="confirm-content">
            <div class="confirm-header">
                <span class="confirm-icon">⚠️</span>
                <h4 data-i18n="unsavedChangesTitle">Unsaved Changes</h4>
            </div>
            <div class="confirm-body">
                <p data-i18n="unsavedChangesMessage">You have unsaved changes. What would you like to do?</p>
            </div>
            <div class="confirm-actions">
                <button id="confirm-discard" class="btn-secondary" data-i18n="discardChanges">Discard</button>
                <button id="confirm-save" class="btn-primary" data-i18n="saveChanges">Save Changes</button>
            </div>
        </div>
    </div>
`;
