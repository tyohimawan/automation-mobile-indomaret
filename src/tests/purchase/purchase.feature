Feature: Login and Purchase Item

  Scenario Outline: User logs in and completes a purchase via Virtual Account BCA

    Given user tap button Akun
    And user tap button Masuk/Daftar
    And user input Nomor Handphone atau Email with <Nomor Handphone>
    And user tap button Lanjut
    And user input Kata Sandi with <Password>
    And user tap button Masuk
    And user tap button Nanti Saja
    And user tap button Beranda
    And user search item with <Nama Item>
    And user tap first item
    And user tap button Keranjang
    And user tap button Cart
    And user select shipping method Instan
    And user tap button Konfirmasi
    And user tap button Beli
    And user select Virtual Account BCA
    Then user tap button Bayar Sekarang

    Examples:
      | Nomor Handphone | Password   | Nama Item |
      | 089632105457     | Testing@123! | Ultramilk Coklat 125  |
