from flask import Flask, render_template, request # ATENCION   AGREGAR EL request.... PARA QUE PUEDA LLEVAR EL ID
                                           # llamar al framework
                                          # agregamos el metodo de flask para  utilizar
                                          # lo que hay dentro de la carpeta templates

app = Flask(__name__)  # guarda en una variable la ruta de inicio de la app

# Rutas de procesamiento (direccionan a algun lugar)
@app.route('/')  # método que crea una url
def home():      # función  que devuelve información al navegador
    return render_template("home.html") #retorna el archivo dentro de la carpeta templates

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/contacts')
def contacts():
    return render_template("contacts.html")

@app.route('/courses')
def courses():
    return render_template("courses.html")

@app.route('/configuracion')
def configuracion():
    return render_template("configuration.html")

@app.route('/post')
def post():
    return render_template("post.html")

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/profile')
def profile():
    return render_template("profile.html")

@app.route('/update')
def update():
    return render_template("update.html")

@app.route('/register')
def register():
    return render_template("register.html")

@app.route('/put')
def put():
    return render_template("put.html")

@app.route('/delete')
def delete():
    return render_template("delete.html")

@app.route('/detailpage')
def detailpage():
    id = request.args.get('id')
    return render_template('detailpage.html', id=id)

# validamos si estamos en el archivo principal para que siempre se quede
# escuchando una peticion del usuario y si se cumple ejecuta el app.run
if __name__ == '__main__':
    app.run(debug=True)   # avisamos que estamos en un entorno de prueba
                          # y se actualiza el servidor automáticamente....
