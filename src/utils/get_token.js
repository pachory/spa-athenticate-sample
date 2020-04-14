export default () => {
  // ローカルストレージに保存しているログイントークンを取得
  const localStorageToken = localStorage.getItem('LoginToken')

  if (localStorageToken == null) {
    return ''
  }

  return localStorageToken
}