import { $ } from '@wdio/globals';

declare const browser: any;
import { searchScreenSelectors } from '../../utils/selectors';

type SelectorKey = keyof typeof searchScreenSelectors;

class SearchScreen {
    private getSelector(selectorKey: SelectorKey) {
        return searchScreenSelectors[selectorKey];
    }

    public async inputSearchProduct(value: string) {
        const searchInput = await $(this.getSelector('INPUT_SEARCH_PRODUCT'));
        await searchInput.waitForDisplayed({ timeout: 10000 });
        await searchInput.setValue(value);
        await browser.pressKeyCode(66);
    }

    public async tapProductCardPertama() {
        const productCard = await $(this.getSelector('PRODUCT_CARD_PERTAMA'));
        await productCard.waitForDisplayed({ timeout: 10000 });
        await productCard.click();
    }
}

export default new SearchScreen();
