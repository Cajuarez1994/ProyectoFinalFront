import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const FormC = ({ idPagina }) => {
  //se agrega linea 8 -13
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({});
  const [formLogin, setformLogin] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeRegister = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name]: ev.target.value });
  };
  const handleChangeLogin = (ev) => {
    setFormLogin({ ...formLogin, [ev.target.name]: ev.target.value });
  };

  const handleClickRegister = (ev) => {
    ev.preventDefault();
    const { usuario, contrasenia, rcontrasenia, Check } = formRegister;

    if (!usuario) {
      setErrors({ ...errors, errorUsuario: true });
    }
    if (!contrasenia) {
      setErrors({ ...errors, errorContrasenia: true });
    }
    if (!rcontrasenia) {
      setErrors({ ...errors, errorRContrasenia: true });
    }
    if (!Check) {
      setErrors({ ...errors, errorCheck: true });
    }
    if (usuario && contrasenia && rcontrasenia) {
      if (contrasenia === rcontrasenia) {
        const usuariosLocalStorage =
          JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioExiste = usuariosLocalStorage.find(
          (user) => user.usuario === usuario
        );

        if (usuarioExiste) {
          return alert("Usuario no disponible");
        }

        const nuevoUsuario = {
          id:
            usuariosLocalStorage[usuariosLocalStorage.length - 1]?.id + 1 || 1,
          usuario,
          contrasenia,
          role: "usuario",
          bloqueado: false,
          login: true,
        };

        usuariosLocalStorage.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
        setTimeout(() => {
          navigate("/iniciar-sesion");
        }, 2000);
      } else {
        alert("Las contraseñas no son iguales");
      }
    }
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            name="usuario"
            type="Text"
            placeholder="Ingresar Usuario"
            onChange={handleChangeRegister}
            className={
              errors.errorUsuario ? "form-control is-invalid" : "form-control"
            }
          />
          {errors.errorUsuario && (
            <p className="text-danger">Campo Usuario vacio</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="contrasenia"
            type="password"
            placeholder="Password"
            onChange={handleChangeRegister}
            className={
              errors.errorContrasenia
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.errorContrasenia && (
            <p className="text-danger">Campo Contraseña vacio</p>
          )}
        </Form.Group>
        {idPagina === "registrarse" && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repetir Contraseña</Form.Label>
            <Form.Control
              name="rcontrasenia"
              type="password"
              placeholder="Password"
              onChange={handleChangeRegister}
              className={
                errors.errorRContrasenia
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {errors.errorRContrasenia && (
              <p className="text-danger">Campo Repetir Contraseña vacio</p>
            )}
          </Form.Group>
        )}

        {idPagina === "IniciarSesion" && (
          <Button variant="primary" type="submit">
            Iniciar Sesion
          </Button>
        )}
        {idPagina === "registrarse" && (
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        )}
      </Form>
    </>
  );
};

export default FormC;
