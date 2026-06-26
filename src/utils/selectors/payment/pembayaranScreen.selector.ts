export const pembayaranScreenSelectors = {
    BUTTON_VA_MANDIRI: 'android=new UiSelector().resourceId("VTBMRI")',
    BUTTON_VA_BRI: 'android=new UiSelector().resourceId("BRIVA")',
    BUTTON_VA_BCA: 'android=new UiSelector().resourceId("702")',
    BUTTON_VA_PERMATA: 'android=new UiSelector().resourceId("402")',
    BUTTON_VA_LAIN: 'android=new UiSelector().resourceId("BRIVALN")',

    BUTTON_SUBMIT_PEMBAYARAN: 'android=new UiSelector().resourceId("payButton")',

    TEXT_TOTAL_BAYAR: 'android=new UiSelector().resourceId("com.indomaret.klikindomaret:id/4l6")',

    BUTTON_CEK_STATUS_PEMBAYARAN: 'android=new UiSelector().resourceId("com.indomaret.klikindomaret:id/amb")',
    BUTTON_BELANJA_LAGI: 'android=new UiSelector().resourceId("com.indomaret.klikindomaret:id/3r7")'
}
