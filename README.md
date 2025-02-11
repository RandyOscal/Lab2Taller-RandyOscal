# API del Sistema de Adopción

Esta API está diseñada para gestionar citas para adopciones de mascotas. Incluye funcionalidades para crear, actualizar y listar citas, así como gestionar la información del usuario.

## Funcionalidades Adicionales

Las siguientes funcionalidades necesitan ser desarrolladas:

1. **Actualizar Foto del Usuario**
   - Descripción: Implementar funcionalidad para actualizar la foto de perfil del usuario.

   Metodo: PATCH

   URL: http://127.0.0.1:3001/adoptionSystem/v1/user/updateProfilePicture/:uid

   
2. **Listar Citas**
   - Descripción: Implementar funcionalidad para listar todas las citas de un usuario.

  Metodo: GET

   URL: http://127.0.0.1:3001/adoptionSystem/v1/appointment/

   JSON: Vacio 

3. **Actualizar Cita**
   - Descripción: Implementar funcionalidad para actualizar una cita existente.

  Metodo: PATCH

   URL: http://127.0.0.1:3001/adoptionSystem/v1/appointment/updateAppointment/:uid

   JSON:

   { "date": "2028-12-15T14:24:00.0000",

    "status": "CREATED",

    "pet": "<pet_id>",

    "user": "<user_id>" }

4. **Cancelar Cita**
   - Descripción: Implementar funcionalidad para cancelar una cita existente.

   Metodo: PATCH

   URL: http://127.0.0.1:3001/adoptionSystem/v1/appointment/cancelAppointment/:uid

   JSON: Vacio
