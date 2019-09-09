const data = [
  {
    id: 1,
    first_name: "Mike",
    last_name: "Trout",
    team: "Angels",
    "hrs": 49,
    "batting_average": '.316',
    war: 10.5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZe78AoEJKekP61QxvA6Z5sUeF1hB4gPnn7ulDwzsoXH6dTm3'
  },
  {
    id: 2,
    first_name: "Bryce",
    last_name: "Harper",
    team: "Phillies",
    "hrs": 59,
    "batting_average": '.053',
    war: 7.7,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQligMNKk-SWdOUHSApoZSq_a72fThzOu3f1QxUdhYIH6XdeYV'
  
  },
  {
    id: 3,
    first_name: "Mookie",
    last_name: "Betts",
    team: "Red Sox",
    "hrs": 51,
    "batting_average": '.282',
    war: 1.4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoLPVui9luuYgpKSpQsiOC07HEiCXuoFZsUk-OY2I8HtcFkbo'
  },
  {
    id: 4,
    first_name: "Nolan",
    last_name: "Arenado",
    team: "Rockies",
    "hrs": 16,
    "batting_average": '.356',
    war: 10.6,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oxe9WS5kuYSUFkl7vL9Atj5Hzy7dFlAXocW43O1LB_dgSV2UIQ'
  },
  {
    id: 5,
    first_name: "Albert",
    last_name: "Pujos",
    team: "Angels",
    hrs: 20,
    batting_average: '.406',
    war: 3.5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBbJxk_ksEwuIJqF5L4g4tiTMN2xlV0EGiwfy8guboO5niOz6'
  },
  {
    id: 6,
    first_name: "Jose",
    last_name: "Altuve",
    team: "Astros",
    "hrs": 24,
    "batting_average": '.292',
    war: 9.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MqtLXgmQPNp-Syusjs7t-pzd23gOP-VuaC4NW6Rp8Ge0BL4c'
  },
  {
    id: 7,
    first_name: "Ronald",
    last_name: "Acuna Jr.",
    team: "Braves",
    "hrs": 50,
    "batting_average": '.103',
    war: 8.9,
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFhUWFxgVFRcVFRUSFRgXFRUXFxcVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tNS0tLS0tLS0rLS0tLSstLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwACAQj/xAA9EAACAQMDAgQDBgMHAwUAAAABAgMABBEFEiEGMRNBUWEicYEHFDJCkaEjUrEVYnKCksHRM6LwFkOywuH/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAKxEAAgMAAgICAQMEAgMAAAAAAQIAAxESIQQxE0EiBVFxI2HB8JHhFDKB/9oADAMBAAIRAxEAPwBB1fWpOwYihsF3J5uefer+vadhiRz50PsYix7VDGXA0whpentI2cfWrmp5hG2i9kMIMcGh3U0WRkmghtPcb+MquiLkAy4J9a0DTT8AwaziNsGmuxvmWP6VZhB1Ed7Cmq9SmP4QeRQyLqyU+XNAbiUyvk+tGLC3Vee5pn5Ai5ncCU5Nv1LtprFy0gJB205x6udg9aA2MW7HFXbqLYKXNuxqnxwT+U93M7OeTUIGK+28mamuPwk0M9zSCKBmSvf9VtAm1e9Ldlq008uXbj0oRrVyTIfaiHTDjdzViSFma6qbcEbb0KEFLGoWryg7VoprOvQRfCeWH5V5P19KoW/WkCHHhOw8zhR89uW+L67alA3uS7oPxJivLaNGcMCDXzxT5E/rTvrjQ3Vp94hwwXAkA/HExzgSL3AODhuxwcE0iZowOxBxh6k8UxFX7aYHuKGKanjNQ2DuShZuoYWLcfhGa8XsJHDCmDpi3AALDNSdURIRkCl3cn1NTw61Vxy7ieEovpagjmotP04yDd+XyPkfkahmzG+wGhqre5q32UZx2WLuAZx5VUa3A7U0aVowkXLHmhGr2XhNjORUAsp0Th8F9fDOxBSkjNWWYHg1XMozip5rX4cg0zyIGzIHiqXKkwlpdsqrx9aBdRQbTkUe6fO4YrxqdoC3NC5Ydhl8cWH4xFGLPmKvPJ8FXrmzXHFBZmI4oqsCepS/x3rQq8rRrzT10/om9QSKTtNAMgz61p+lXypGBRHImYiknqVH6fANfavtqddS/UPjRXa5RosnGcYpf09irHjjNSpGT8quWsag1a5wvUZ8XxLH/IDqSi8K1R1q9DLRV4UaqdzoytQlsUe4yfDufQsVQaIw35C7aL2PTyluTTVpHR0TkE0wrAzLet0JEzyENnODRjTyWIrUP/R0G3AFJuvaR91bI7GrWDrqVpOthlyz7V4v5+MZofbXh9aIWNiZycUso2aZYJ3KttNirbykqakk0gxtg9qg1NXCYSrHQZJvBHUSdSjw55ryt8YUGw4duQcA7R68+ef6fKpZdNlYszeQJPyAzQhpcnO39ST5Y8sUdVBmU7MDsJaXbWrAmd5VJP4k2tt9yjDLnPOdw86G3cKq5VXDrnhgGAI+TAEH1BHf9a++IfI4/Yf80U0+2hZMzNj+RI8GR23LksoHwpt3d8ZOMedXLACURORwSx0deSx+IuF8GXaJsqSxVCW2RkEYJ5GT2z9DNdPaxL/0i83BAL/w15/Oo5PHkCD/AFolYWkhxtj8NT8IJAJUY7+i+XbOOe9VJ9H8ZmaRvDO3O78owMLuB9cYyO3JwaUFhLaxwftNSxKq6uNS8m+2P+BAW7c2eBn+UBV+gHAFSyKFGc9q82mnSMQCrLnkZBGR6g+Y9xR1OmCRz+9Hcj1M+tG9iFultTDJiiawePcQxEZV5FDD+6Dlv+0GhGmaR4HamnoeBnvN5HEaMw/xHCj9mal3wAmOBiB/eaBd38SKUZAQRjbgFcemO2PasCvYhLeTMnCCVwgznChiAM/IVp+o6tuR5iAAgkYDOeI8gH5nHas10ZDnNCpZgDsj410Rks1IXg0C6oc4OaJePt4zQTXhuPeiqO4blgPGAbKB5GwKZotKk24NetBslUZppjZStWss7wQVKMvZ9xc0exMb81NrK4INX5TtavGuxhosignuOeO4SwGLdy3FC57Qv2qWW5qbTpxmiopB2H8y+tlKkwdbWMisDimEXhAGRV+IKR2r09qrUYnfcwFJX1IEuMjNdUgtMV1T1I1oCWpUXNFFjiK+VCknVX21nissR3PbtctSnfqWYouat5wKj3CveOKOPEPLs9RG39RHx/iDpnywuMPzTJZaiydu1KaTqp96IxaiMd6s3R6mMi9flG286uSFMt3xWY9UdTvdN6KKk6jnVh6mlwGmU7Hcz7gFfqFLDU/I01aB1EIvI0ixx80yaHabjUEBTsn5GccY53mq+Iu4A/pQ9LvdRS2iRU2nvS1fZRzt7GgMeXcarXgMMITopUj1BB+RGDWaXkBjcow5U4P/AOe1OhvjVLqGBJlQp/1QMEfzAc4+Y8vXt6VNRIlPJAIBgDRNPNxMkIYKWzz37DPAJAz9abLfQxb5Zedpw28YOf5l8mX3HqPUUpWMTxzr3Vl54PIzyO3Y05TarcuoSRkaPOeEIY+mecD6AULyS24D1L+GEzSO4fstYO3Bx9BivtxMhG8IC/ZTwB8iSPw+vtmlY3m3ipP7YUDlsDzpZVIMddlyXYIHTwxMiqwMhAUqVCuVYBNvZchuPKjinI4FL+npE5DpkZ4AzxjAywHvgfpTVZRgCnD3FK8Alb7m5GSOKP8ATMTCC5eMZbGxBkLlgpOMngcstU7rUgExjn2o109GUslJ7uWkP+Zvh/7QtAubBDlPw0/Zge7s18EoRtXaqYOMgDkqcceXOO9LkFrEhIUj2r11/rBj8OJTgsGdvXBO1f6NSGL185BNGpQle4GxkUbvf7R9msAeSeKH3Ngj8Zzj0qnplzLKMGjMNoEGT3rSo8B3G/UTPnVqTyEFW8RQ4zxRbT0JPeqV4RjIqXQZOaW8jxjU5Bl6/I+QdQrq1phM+dA55S0ZFH9RfctULG2DAg0mfccHQiE6DcQa+2w2tU3UtuY5OPOiHS9lv+JhnFMlgF2IcC7kS1BJkCrUT80Zv7SIx/CMEUp2Du8u3B4OKqrcu5LoVOGM0doSAa6jFvFhQPauofOHFcUpNN9DQTULLY+aZpJdpI9KDas+aDywdTVp17AG7lJJzXT6kFHeqF7c7RgUHeQmi1VlvyJned5yU/00HcJJfZfJouCCODSrV6xuiDyaOyTFXyDp5SW9XnvUEUXNW7a0eeTav601J0iqJvLZI96kuF6MGKmfSIO0fRfEIz2pwTRlhUFaGafwMCrn3lsYNAZyTG66wBJZJxjNL9/cbjwKsy3IHBr5Aqnyo3ipyPcjyX4r1BpU47VWsdOmnmCRIzPngKOfn7Djua0Lp3o6S5O5gY4u+8ry3sgOM/Pt86ddU6dEKxy2MapJCxbwxwswKhWV/wCZto4Jz5+eCCvWqeoqLOZGzM+p+gbi3hhlJjIzmYKmGSRge75+JfLPHI+VA9uOK3yN4r21PfZKpVh+ZGHBB9GVh+1YzrekSW8jJIOQcA+RHcMPYjB+tKXjMMP457IPuBbi3XHK5+p7066DocL2DNGoEsYYu2FYyY+LGTyMAgY7dvXNI91IV5Ztqj1OK2f7PdOMenq0q48UPKwbyRwNoYHtlFUkeWamhf3neS3qZY+lTIFuArNC4ysi5ZCPcj8J9jg0QW/KrT79mFqV06DIOMMOeDgSOAfniil90faTZ3R7WP5oyU+u38P7URlJHUiq1a3x/UyYXRPNabejw4kQflVV/QAUq6t0VNbzRFT4kBlQFsYZQXH4x8uNw4+VHepNRVA7k8ICx/yjOP6frSl4OgGM81Y6voTFutr0y38uOyERD/IMMP8AWXozoejRlQX86E6RpQlJkc5Yksx9WY5J/Umm6BFC7aZZsAAgaqTpZvuffuSx/hr0ajknxUEc2TXov063nVhmN51XCzqSzWoINDLaQxPg9qNxiguuXKrXfqFK2V79iR4VprsGwwl0DxU9pAQc+tBtNmDgEUxwNxXnEr2b19nHIv8AVOlBjuIr3osaR9jTjFaCRMMKC3/TrJkr2ollRI6i1NygnZ4u9uM176d05CS2KFSy4+FqZtFgwmaigS3ksCBCDQCuqJrsCuo3xiLfI0QdQUs2RVaTTiwzVz74qD4/KvdlqqyNhcYFICskTcr8haWO+4nazpkq8lTigtbfqngSwYJXOPas603pfx52UH4aZrf6mZ5Q5E2fvFgV9U4NMnWHTYtNuD3pZo0TjRoTMjAoM9qaLq9fZtKn9KW+i3O7AGTWiWlm0nDAAUoyhrMj1LFKu4nJcFama8yO9F9Y0baSRQqz07e+31qoX8shzYOPIQFqF8ue9aX9lXTZlQXc6/w+8CN+fH/ukfy57DzxntjKP1H0S4UvGecHjyziv0FpNoIYIolGBHGkYHsihf8AanE/EYJm2PzOy3Xw11fM10pFjU9IuIJmurIg7zunt2PwSf3kP5X/APP7po62U1K3Y2wQ3MXJgnUAnGcxuufntbOA3oc4dc0A6i6YjuCJUYw3K8xzx8MCOwcD8a+XrjIBFRmQgYN03/MyrpxYLm/ghksVRldi67z4Y8JWZi0RXLNuXGGOBnA44Oo9Y6g2wWsPM9zmNRkjah4eQkdhjdz3HJGduKXOitNc3U9/Ky7yrwTRgcrPGYy7KcYIZUB4xyzdxijPQNoZEN/N8U85bGe0cYcqET0B2g/Lb7k2Yg+pyrxJLfUZtOtFhijiXsiqg99oxk/PvVihuo65DCYQSWM0gjjCYbJLBSx5/CCy5PuKuzS4/wBvqcf71Eod9mDuqr0Q2kshOMAKCfV2VB+7Cs+0BPvk0oY5jUcj1Y4GWHvhsfKiv23XmzT1j85ZkB/woGkz/qVP1pZ6KvFsdOW4lJzcvIwJ74iPhqP2LD/FQmr5OG/aHS3jWVH3IOodFFvKCnAPlQm4kZeaq6p1eZ5RnhAeM0YjuY5EGKq6nlDVP/TzYJbVMjBFSWL85rzq9pgblFUorjA4rT8awJWc9xC9WZxyjBLqqovNI+s3viOSDxX3ULxmOKobaW5MfZhLCp6AhDRdRaNxnJGa1TSjvANZDb8MPnWu9LzAxCuwDuULEjIwWy4q8sW4UsXWr4faKI2WosOaE93Ew1dPMSrq2gozDjBzRi3tAseB5VG90JKIQdsUVGDDRBWKVOGIl/LiRh711TapanxX+f8AtXV2zpnnW8DpNjyPaq2mWsijcAeaeOorAThWAyRV3T9N2oAy0l8mLk0UTXLGZ7ewXO4bS1PnSVk0a72HJ5osnT24Bxt58sHj6+dTXhEMfJruRnEKdG7FTrO3Nypx3Ws4t7Nmk2DvnmtNgUyFzng0H6Z0nNw7EcA1dbMB2Aso0jIZ6U0Dwhkjk052cfHFQRR4WrFm9Vq7bkZa/FTiJFc6eWzmh1lpQVyxFMLNUB5pgqDFQ5AyciAggjPzpivupYI3EQJeQlF2qDgGQgKGbGAeQfYcnFADwKJJ0yGfx45NhkQbsIhJJA5343fQmrqBvcGx69SS16oDTCJ4JUJLKXxvjDKQu1nHYnIovduQrFeSATjOOR/SqOmdPJEBl5JGBJDOe2e4UDAAonOFAwSBntk/81zcfqQu/cykfaXdK6NJbxhXG5VZznbu28MPw5IOCUw2DgnFaTpOrrNax3JARWTeQWyF75Bbjtg5PHasMl02ZDePFApgSWWEsylmi8Jlclfi+BSCihsNhVYDb524bspGYozIyS2whiUk8tNLB4g8PO1SzrdjjOTwCc0AMQe5pt46uo44D9/79ZC79ZCMXX3dS33i5klR8Z+FgqNtjP5sIMbsfjzg7SKoaPr10sLRLK5hAeMghcBGZnDKy4IJUOOOT8Q4wCs/TOnWqRStdTiOVwFjjQNK8RWQOxkUdiWUfCSDgtz8WBb0DU4YLeaFrYTb5SwLMIh4agCL8IJQj4mwOxY8kk1VmA9nIeqksPwQt2Pr/PqAdJlfxIQpYFZVeMAZVnZ0ABcEqc7UGFxkquARk069J674t7eszYR2V1BbPwwkoCP8qp29aX59ZCEGKO3t3AJQwwB5yBncDI+45x+YetCNM1JYpY2iMaMMgPcNthBK4LSHg47/AFPfGKoLRoyEbxyyNq5g/nPs/wC/zCn22Xzu1rCB8TeI4XtncUSMfqG/Wj/2jaGI9KjhC/DapHh8/mGImB+e/P07eYWOrLW8mvbW9drZkVFZGiLND/BlLA7cliNzLyO9ENbvzcwypJO88jRuIkWPwLeNypw2D8UjZ7Egd/OjG1QezEE8K5xyVepkxWjfTlwVfBPFBQpqa3lKnimSuiJq2GaXdzJJEQAO1JpGCVopp1wdvNBb87XJzQ/HPFiDD+RjKCIPvhzVbNS3kmaqBqI/uLCThqfugtQzlDWfCmPoqXbOKrOjTdIfvHNG7SbAwaHayU8RSDzX3JHNI3nGmp4y7XohYz4IwKPWrHANJ1lMWcCnC3OFFM+OOop5R1slC8tsuT/52rquOea6jZFtixpEmVxUtzq3GzGT2qpYIFxVPGy4Jfz7Ugg2aLnOodg1O42hc/COwwP6151qIXMJXODXh7tfKoY5sHNC5HlGRV+PqUNNsGjAVj86NaVpyqSRRDQbYSnLDiiuoWQjGVHFGKkrsBzUNxgu4P5RUNrL8WK9A8Fz5UL0q53ux96MgwRS1tMYZHqJJKru2aljWiQElml4qte9TXEcYD3MFrGFAU7WublwowHEKggKccZx2r5fHAqPpm3t7iZopUV/4bEA58mXzHsTUGXU4dnhbhZRue7vZPbetsh+cY3/ALgVWubW0XkWqHPm8s7H/tdR+1D7mBoZZYc/9NyBnzXup+qkH618kieQd8Gs5rbNya61pxBG/wC/xPrawyQz2dvYy7ZsgOgeZB4oAcjAZs98Bj3Oc4FHLnRZhpwiSJPvUMR+L+GJU8aYs0STE4UiNnBw2M5x5VU6dle2Zmfc2R8OBwD/ADH1pj0rXbYKRI5DM+5sqx4HYZANNK6n2Yt8dvpE0bv7xT6Q6EaeCKZrgIrAjaiZbKsVPxk4/KfI0W6R6ct5JLoSb5fBuHhUu5UBU45VNob65ot0dqdvBaLHJKoMbSAA5JwZGKkY9iKG9M6nHD973Fv4t3PMuwZLRu2VOTjb58VI+Md9QznzLAynlg/+CMtxo8aRSJBFHGro6fw0VeWUjcwUc8msk6m6Je3tg0rqXdgsapkruALfiIBP4QOw7/po9x1dGnEUblv77DHHfsT2pc1nqQynE4XA5xtBQMOzZIJGO/cVD21wni+H5eEDoH3+5idqMohwAucBYxj+6vn6dhX23uFIUnBI5K57jz+vmPQgVckhikBHiFiWz8GCCCOzeg47g+fbzEd1o8RQjbtOO6khv186TXAQTPRWKzIUA0ZnfX/EGa3aRfiiwQeSBxgnk96pafpIlORU2oCT7oGLKy7o3Q/mUMrBl55AyUOMnn24AnT9RePsa1+er1PDNWVb8h77hbUyI/gB5qzYaBJcLkDn3oJbgyygnJ5rU9O3RouwD5Us7kGMU1B9ma3OgSRSbJVx6HyNXh00hFO2uR+Ku5xgjms8utYZHKjyqxct6nfEK/8A2Evf+m0UZY1RkYQtlKr3WrO470PLk96YRT9xV2G/jL1xrEjOGJ7U56JqKzIATzWeYqezuGjbKmqW0hxCUXms/wBppUcvguCRwaarG7V8EGs90/XFkADCjtu5Vgyng+VDqsCt8be45d4TPT86d/2ji2K6qsc+QDXUzMvIu6dbEuF96t9VaOzFXQcgUWs7TEm71FHUjzSipgIjT2aQRMraVxgMCCPWpYrnPetE1bR4nQ5ApTt9CzIoHIzz8qXakg9R9PLVl79wt03PxRfXJf4LH0BqaLTwuAo7UG6t1RbeI7vPgU1mLM4tyfYhzdRyEGPHfiiHTmRyfOluycO5Pqc07aZCNvFVQ6JNq4YUhXNTGvkYwK+ZosDK2pN8NLfSuoCDUomY/C5MTZ7DxBgH/Vt+maO6s+FNZ3qsmdxodhzIapd3Zq/2jaWQy3SjgARy48lz8Dn5FiD818hSh4xGCCD82IP6Vo+ha0L2wjkCh/Ej2yKRld4+CRG+ob51nGr9HtFk5uAueMoGAGeBvzz86BdTyOiMeN5HFeLT2mtuOG2gfMmoWuQPMUE/sMk8S/qVH/2opY9Mu7ANOADgZVVc/wDzFA+BvqbHg/qFNeizqSG9X1FfbTV4g3JDdztB54B9KPX/AEfbWsH3iTxZAkkW8SMqqUaRUcBYxn8LE9+4FOElhaiApbLFC6/HFtVVIkX8JOOSCeD6gmiL47fZhL/1mrjiKSD1vr/uZbDqA3B8j8R8yDycg/vVTWp3WTGc8cAKScduSPXHtWkzy2F7FDcSQiSVlKBMtgENh0ZQcHDKe9Z5rfTwiuJQT8GQVRWRQrNy0ZOdxC8Dge3lVHp4jdhfF/UBe+cSDk7p+PPiSFQAMLwu3J7nd7jjn3qTUrgLGzeg49yeAo9SSQKqR6mII3xypBBCnK4YqPhzyzEkZPp8qoaTctcTLu4RTkKPL3J8zU11Fxv1L+Z56+Pqntj6H+TL1j0xLPbrGDtA25/yrjA/Rf0NWn+zzbGTuy1NwvPDUKvFWBMWX51ZbG3BPPOoc630Mmc9LwBHZHXlTj9KeLedRxQ/+ywsm71q9Na8ZFdaGB7jfiunDBPl+isCPasq13TiszEdq0ZrZznvSlrzkEjaaPQCDEfLblFQ0T0HSWuJAo7edD5Ymz+E09/Z9FsXcwwaYtt4roitFXN8MadL6QgjUbkBPnxmiOqdM2c8ZXYoYDggYI+tTR3uRgVDczMORWeL33dmk3jrmETK7zTjBI0fmDwfUUb0W6OQGPnUXWasriQ/WlVtSbI28c0X43dg0cr8ymmkof4ybPCU2jmupMs9TbYufSvtPbPOkdzQdJk3Ip9hROSURqWPYDNDenyDCh9VH9KrdZ3Oy2bnvxQSckgbFHV+qJp5CqHamce5pt0OQRIN/wCtZvpFs0kgIPAOcVoe4FRn0pN37mhVT1G6zlVhkUifabYiQxr70xdP3gYlVOQK99RWSuQzUxyJTRF1rX5cMxy508wYIORTd05OGUVL1JpIMfwDJFANCmaN9pqlbYe4XyKx9R7Y8VExr4smRUNxOB50zEYM19/g4rO9ZcqMU76jdZzSV1O2fKgEh26jIUpWd+4d+zTrr7iGilRnhZt428sjEAHAJ5U4HHrk+ZrQtV+0TTGj3PcSkHIEccUitkflYlcZ5Hn5isHtjX6D6Y6NsJbG2MlukhaJXLN+Lc6gthhjz4+go+RYRSu7OGVUuIPEWKRBIAxDEA+vxEg+1B7a6t2GVuF+uc/0rW36WiSNUi+FVBAB+IAE5x5cVkWo/Y7dR5MU8Ug54IaMgeQ880MrDCzqeuob1zZyRJOGDlAV3HOA6nIB+VNU/VFovxvcRLvJYjdk5zz8AG7uPTzFZ03QmoRK38FmY42+G2T357j5fpXzTPs91GZjugMQ83mIUfQLlm/THvXBZJsjp9l2qxEOE+ORWZwCpwgkdiMZ8zihUlnM901vDF4qrIU8XYHbO0MwdueVJKFvUU49BdDCw8Rml8R5NgOF2KAhYgAZJz8RyT7cU92iAcAAeeAAP2qWqVhhlqvKspbmhwz80dQ3LhzE0bIUOGDDDZHljyHn+lX+jyN3en37QdPR7l/FC7iFKnAGVxgE+p4I+lJkWkBGyhx7UP5UUfGOo6/jX+QP/IJ2N8K7zRWLgYzQzS0wuT3q14vNHppCiZltrE5PF7G2Mio7CdiMOOaJLXiSId8VeyoOMkVXGttEl02RFOG86nv9Ggl5Kjmg8MW5xmmgFSmKlUxcMiyzk/IRC1fR4ojnHFVbe8jHwrgUf6ls2ljIHfypKsdGlRtzmlbKDvUaq8oADY22d2AKuS3vHFCIVBWqb3LK3rSPEhsmobFK8oC63vmJCmgekWm9s+VEerBJI4O04FQ6CcA1rVDFyYl78rCYeR1UY9K6gsl1ya6pk8h+01/o6XdaxH+6P6UvfaZqOFWMfM1U6e1zw9PQDlsYApZ1K9aVsucmk7rgpyP+F+m2XrzBwTz0vM5mAHANP6uPwsaS+n7uCGT4yAfKmmdEnDMkgG0fuf8Aal3BY9CHWs16rH1GnpGzVAxHmc1e6kYiFiPIVlWn9VTR42MCvmDWg6Fra3tuwPDcgj0NNI4zieord4jL/VUgj+0H6BfLIuDzVbWdGBO5Rz7VX0rRZbdznlSTzTVCQRzVCJAct3FKyuSvwt3HrVLVLvnGaM9UWgxvTgjvSBOdxyT+9GX8lyLOAj7LdxeAY586F9UTKyDA96uRWKMfiP70YGjwFcHFWrrCiUutLnqZ3a1+oujrLwbG2i3BtsS8jsdw3ce3xViY0O3XPb9a2zo9cWUAznCAAnn4QSF+mMVaChg1E6D+TP1FS19qJ0HvFzwmP3ryls3rRHNdmuyTsprb475r0iEVZAr4x/WpkTI/tv02cGK8Rv4QAgdc8qxZmVh6g5I9iB68IGi38jOFzmtc+2LRJrmzDxscW7GVo88OuNpb/EgJI9i3nisp6UtP4uWGMetSFU+4VbrEGKTNCthhR8qgefDV7nmAHegUd0WkxRYCNMU1SiYGhanip42qQZ0tqMV7+97fOo0bihV3P8WK4nJ0LyXgIoRI+4mqsl5iutpvOh+5Mq30zr+EVAbnIz+YUVlbg1VtbQE5xVCgJ2XW1gOMsAqyAutBNQ00DJj86Y2hBXFCC+19tWJwdSagGcAxd/sWQ819puBrqS+Zp6IeFT+0p/ZxZCSEM/I8qKdR9LgqXj4I5xUfQBVUZF7A8U139wFjJ9qE5DNsBU1lB4766mFS2MzuTtPHH6Vb0eK5dzHGzDPDemKL295JPMyRpxuOTjiiq3a2JbcMluQaMlreiP4gfJopzUcnff7SSHpNYI9xOTjz/wCKm6buzC/AIUmlu462dmx5ZrTrWKJrXcR+XOfpRAjN20UN6oOKy+t0rrjIqBJtp71mEOuSLvZW4BbHyBrrXquWUkHio+IiVF6n3GbqHWtu6PvntWbTeLkkZ71dudWZpsEZ5xXy/vNpHw0dF4iAts5mQQib3q3DLL25qf7ziPdt8q+6debucUTYDJUEEviKWBKblLgHkqCNwHvjNfp20K7F2ABNo2AYxtwNuMeWMV+b/wC1sSbdv71vPRTsbG3LdzGMf4cnYP8ATiqGXHqG2UHuK8+GfIn5HkV9JPt/WoJQ/kefQ9qrJnm5uCgywGB+bIH7ZqG2vPFAMWCp/OGDDvg7SKkBUg5XJAPwnz9qltogvGAPXAGT7nHYe1dOkw9q9AV9rqmRAfV7t4G0HAdgj8ZypViR7cgfvSHPpsY5AxWidSsotpCwzwMf4twCn9cfSs0v7xuwFK36G6Me8XiV7H3ItRhxGcelL+gRsXJPrTDcPuj+lB9MkwxFX8ZyejJ8ytQAVENipo2qBWr0XpwTOlvxeKDXDZarU8/FD4znJqGM4SG9HavdtIO1CtVuTuwKmspMdzVZMPOvFfYjxVIXeeBVuEcZqZ0nEmBS5qM/8QUUubnFK95c5lGPWuM4dRnU5Ar7XyB/hHyrqWNU3F8z8RA3R2olJtp860K4TeNp7EV1dSlnREuTrHYNZYbZSVXB8+KzLq3WTK+0dq6uo9ABOmIeSxAwQFaLl1+YrU9U18R2e1c524rq6m4hECxnzEc+eTXvSRgmurqkepEjI/jfWvWvScrXV1cZwl5WzB9K+6ZHhTXV1ULHchFUZsG202Z8e5r9B/ZbdmSwUE58N3jHsoIYD34b9K6uqZSNteTXV1dOkbqD869WhygPqAT9a6urp0mrq6urp0BdcTbLC5f+WMt/pINYU/Vvsa6uqjIGPcKlhUdQto+peKKgfKy8eddXUvV1Zgjtx5UaYbhBAyarTXXNfa6n5lysb0Z5qWSUBc11dUEyYqh981GFgr5XVE6E7GIVcdscV1dUzoNvx8JpNVz4uT611dUGSI4W96u0fKurq6hcjGOAn//Z'
  },
  {
    id: 8,
    first_name: "Freddie",
    last_name: "Freeman",
    team: "Braves",
    "hrs": 26,
    "batting_average": '.280',
    war: 12.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqRGZmLG9-I7WIzQ3ZWGWW5k9Xy8yB8t6_7MhUyrd-7KTq_6o'
  },
  {
    id: 9,
    first_name: "Matt",
    last_name: "Chapman",
    team: "A's",
    "hrs": 50,
    "batting_average": '.297',
    war: 12.8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsj15DDWY8HZf_CWY-ygjpbfeyNFW0Cw_XgmKsWyYeRPbV4B3OLA'
  },
  {
    id: 10,
    first_name: "Aaron",
    last_name: "Judge",
    team: "Yankees",
    "hrs": 44,
    "batting_average": '.407',
    war: 6.5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuN9XWbVRduPFVG7UJiExAr_sxhTEf1ZC2eQkXGVkpnJGaRWI'
  },
  {
    id: 11,
    first_name: "Carlos",
    last_name: "Correa",
    team: "Astros",
    "hrs": 24,
    "batting_average": '.139',
    war: 1.8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLP-zQP0jDbe-UrCwOBnRE31deQC-DRgnGKzYEKRcCoymdzHZ'
  },
  {
    id: 12,
    first_name: "Kris",
    last_name: "Bryant",
    team: "Cubs",
    "hrs": 22,
    "batting_average": '.551',
    war: 10.4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VUVyBEgUcX65reW0UqkiwNKv71OWmzVvpMdgTBD0VxUt3STpKQ'
  },
  {
    id: 13,
    first_name: "Cody",
    last_name: "Belinger",
    team: "Dodgers",
    "hrs": 40,
    "batting_average": '.476',
    war: 13.0,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-Zl9nXsvLZEm3U_0f2LCRK0Y5deQLpbbfaDgnmKOUBnX_r-bSg'
  },
  {
    id: 14,
    first_name: "Max",
    last_name: "Muncy",
    team: "Dodgers",
    "hrs": 40,
    "batting_average": '.311',
    war: 8.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmf-VoLYGIPUMG_5ItC4mWtKxkHg-O6kTqDCyt59L6zk4LuuQ3VQ'
  },
  {
    id: 15,
    first_name: "Christian",
    last_name: "Yelich",
    team: "Brewers",
    "hrs": 18,
    "batting_average": '.519',
    war: 13.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBc0YeHLq2oBLAx19RIGy8Q2ZrKoXG7_bMchJMiJVaT8p3Wiw'
  },
  {
    id: 16,
    first_name: "Francisco",
    last_name: "Lindor",
    team: "Indians",
    "hrs": 20,
    "batting_average": '.236',
    war: 2.6,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UBelu2g0SUkXsIFczDMCf-QmrIGHK5xzSMZexXlLKDy7MU1u'
  },
  {
    id: 17,
    first_name: "Joey",
    last_name: "Vatto",
    team: "Reds",
    "hrs": 17,
    "batting_average": '.255',
    war: 6.3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CBBNJ7U7xY3HJGwWJHsHYoaZOXW9nh5_J8vPQQRcprAYenbN1A'
  },
  {
    id: 18,
    first_name: "Paul",
    last_name: "Goldschmidt",
    team: "Cardinals",
    "hrs": 23,
    "batting_average": '.495',
    war: 8.3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIC2Q4J_dgeWrt5MyGwzhCKiADA9-C0Jje_qVEGy7RUiosRJIivg'
  },
  {
    id: 19,
    first_name: "Manny",
    last_name: "Machado",
    team: "Padres",
    "hrs": 3,
    "batting_average": '.221',
    war: 11.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9XlOLnwUTa9p3jlJfPNHLYX9es7yYvyOzEftpps-dBszhkho7A'
  },
  {
    id: 20,
    first_name: "Nelson",
    last_name: "Cruz",
    team: "Twins",
    "hrs": 44,
    "batting_average": '.223',
    war: 2.0,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOCb0OxymRYtCKv1vnzd5J2ntTDAnZxOSt9KVuv86ssd1C-u9'
  }
];
module.exports = data