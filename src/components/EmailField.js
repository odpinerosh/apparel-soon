import './EmailField.css';

function EmailField() {
    return (
        <div className="form-div">
            <input type="email" name="e-mail" id="txtMail" aria-label="Email Address" placeholder="Email Address" className="input-control"></input>
            <button name="favorito" type="button" className="button-control">></button>
        </div>
    );
}

export default EmailField;