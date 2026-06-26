import { $ } from '@wdio/globals';
import { productDetailScreenSelectors } from '../../utils/selectors';

type SelectorKey = keyof typeof productDetailScreenSelectors;

class ProductScreen {
    private getSelector(selectorKey: SelectorKey) {
        return productDetailScreenSelectors[selectorKey];
    }

    public async tapButtonTambahKeranjang() {
        const btnTambahKeranjang = await $(this.getSelector('BUTTON_TAMBAH_KE_KERANJANG'));
        await btnTambahKeranjang.waitForDisplayed({ timeout: 10000 });
        await btnTambahKeranjang.click();
    }

    public async tapButtonKeranjang() {
        const btnKeranjang = await $(this.getSelector('BUTTON_KERANJANG'));
        await btnKeranjang.waitForDisplayed({ timeout: 10000 });
        await btnKeranjang.click();
    }
}

export default new ProductScreen();
