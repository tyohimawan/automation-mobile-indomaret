Feature: Login and Purchase Item

  Scenario Outline: User logs in and completes a purchase via Virtual Account BCA

    Given user tap button Akun
    And user tap button Masuk/Daftar
    And user input Nomor Handphone atau Email
    And user tap button Lanjut
    And user input Kata Sandi
    And user tap button Masuk
    And user tap button Nanti Saja
    And user tap button Beranda
    And user search item with <Nama Item>
    And user tap first item
    And user tap button Keranjang
    And user tap button Cart
    And user select shipping method Instan
    And user tap button Konfirmasi
    And user check Total Pembayaran
    And user tap button Beli
    And user select Virtual Account BCA
    Then user tap button Bayar Sekarang

    Examples:
      | Nama Item             |
      | Ultramilk Coklat 125  |

  # --- Negative Test Scenarios ---

  # @negative
  # Scenario: User attempts login with incorrect password
  #   Given user tap button Akun
  #   And user tap button Masuk/Daftar
  #   And user input Nomor Handphone atau Email
  #   And user tap button Lanjut
  #   And user input Kata Sandi
  #   And user tap button Masuk
  #   Then user should see error message "Kata sandi yang Anda masukkan salah"

  # @negative
  # Scenario: User attempts to purchase an out-of-stock item
  #   Given user is logged in and on Beranda
  #   And user search item with <out-of-stock-item>
  #   And user tap first item
  #   Then button Tambah ke Keranjang should be disabled or not displayed

  # @negative
  # Scenario: Total pembayaran does not match expected calculation
  #   Given user has items in cart and selected shipping method
  #   When user check Total Pembayaran
  #   Then system should throw an error if harga barang + ongkir does not equal total bayar
