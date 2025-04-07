import React from "react";
import { useState } from "react";

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Simple validation check (pas nécessaire si tous les champs ont "required")
        const isFormValid = Object.values(formData).every(value => value.trim() !== '');
        if (!isFormValid) {
          alert('Merci de remplir tous les champs.');
          return;
        }
    
        console.log('Formulaire envoyé :', formData);
    
        // Ici, ajouter l’envoi à une API ou backend si nécessaire
    
        // Réinitialisation du formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
    
        alert('Message envoyé avec succès !');
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Votre nom" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <input type="email" className="form-control" placeholder="Votre adresse email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Sujet" name="subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <textarea className="form-control" rows="5" placeholder="Votre message" name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </div>
            </form>
        </div>
    )
};

export default FormContact;