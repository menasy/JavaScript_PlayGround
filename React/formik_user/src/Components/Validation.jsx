import * as yup from "yup"

const validations = yup.object().shape(
	{
		email: yup.string().email("Email formatı yanlış !").required("Lütfen geçerli email giriniz !"),
		password: yup.string().min(5, "Şifre en az 5 karakterli olmalı!").required("Geçerli bir şifre giriniz !"),
		confirm_passwd: yup.string().oneOf([yup.ref("password")], "Şifreler Eşleşmiyor")
	}
);

export default validations;