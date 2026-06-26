import { $ } from '@wdio/globals';
import { akunScreenSelectors } from '../../utils/selectors';

type SelectorKey = keyof typeof akunScreenSelectors;

class AkunScreen {
    private getSelector(selectorKey: SelectorKey) {
        return akunScreenSelectors[selectorKey];
    }

    public async clickButtonLogin() {
        const btnLogin = await $(this.getSelector('BUTTON_MASUK_ATAU_DAFTAR'));
        await btnLogin.waitForDisplayed({ timeout: 10000 });
        await btnLogin.click();
    }

    public async inputNoHpAtauEmail(value: string) {
        const inputHPEmail = await $(this.getSelector('INPUT_NO_HP_ATAU_EMAIL'));
        await inputHPEmail.waitForDisplayed({ timeout: 10000 });
        await inputHPEmail.setValue(value);
    }

    public async inputPassword(value: string) {
        const inputPassword = await $(this.getSelector('INPUT_PASSWORD'));
        await inputPassword.waitForDisplayed({ timeout: 10000 });
        await inputPassword.setValue(value);
    }

    public async clickButtonLanjutkan() {
        const btnLanjutkan = await $(this.getSelector('BUTTON_LANJUTKAN'));
        await btnLanjutkan.waitForDisplayed({ timeout: 10000 });
        await btnLanjutkan.click();
    }

    public async clickButtonNantiSaja() {
        const btnNantiSaja = await $(this.getSelector('BUTTON_NANTI_SAJA'));
        await btnNantiSaja.waitForDisplayed({ timeout: 10000 });
        await btnNantiSaja.click();
    }
}

export default new AkunScreen();
