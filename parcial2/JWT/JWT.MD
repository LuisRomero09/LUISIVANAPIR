### ¿Qué es un JSON Web Token (JWT)?

Un **JSON Web Token (JWT)** es un estándar abierto (RFC 7519) que define un formato compacto y autónomo para transmitir información de forma segura entre las partes como un objeto JSON. Esta información se puede verificar y confiar en su autenticidad debido a que está firmada digitalmente. Los JWT pueden ser firmados utilizando un secreto (con el algoritmo HMAC) o un par de claves públicas y privadas (con el algoritmo RSA o ECDSA).

Los JWT se utilizan comúnmente para la autenticación y autorización en aplicaciones web y API, permitiendo que los usuarios se autentiquen y que las aplicaciones verifiquen su identidad sin necesidad de mantener el estado de sesión en el servidor.

### Partes de un JSON Web Token

Un JWT consta de tres partes, separadas por puntos (`.`):

1. **Header (Encabezado)**:
   - El encabezado generalmente consta de dos partes: el tipo de token, que es JWT, y el algoritmo de firma que se está utilizando, como HMAC SHA256 o RSA.
   - Ejemplo de un encabezado:
     ```json
     {
       "alg": "HS256",
       "typ": "JWT"
     }
     ```

2. **Payload (Carga útil)**:
   - La carga útil contiene las declaraciones (claims). Estas son afirmaciones sobre una entidad (generalmente el usuario) y datos adicionales. Hay tres tipos de claims:
     - **Registered claims**: Claims predefinidos que no son obligatorios pero se recomiendan, como `iss` (emisor), `exp` (fecha de expiración), `sub` (sujeto), y `aud` (audiencia).
     - **Public claims**: Claims que se pueden definir en el espacio de nombres de la aplicación.
     - **Private claims**: Claims personalizados que se crean para compartir información entre partes que aceptan usarlos.
   - Ejemplo de una carga útil:
     ```json
     {
       "sub": "1234567890",
       "name": "John Doe",
       "admin": true
     }
     ```

3. **Signature (Firma)**:
   - Para crear la firma, se toma el encabezado codificado en base64url y la carga útil codificada en base64url, se unen con un punto (`.`), y se firma utilizando el algoritmo especificado en el encabezado. Esto permite que el receptor del token verifique que el emisor es quien dice ser y que el mensaje no ha sido alterado.
   - Ejemplo de cómo se forma la firma:
     ```
     HMACSHA256(
       base64UrlEncode(header) + "." +
       base64UrlEncode(payload),
       secret)
     ```


