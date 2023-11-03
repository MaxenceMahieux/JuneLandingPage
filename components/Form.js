import { useState } from 'react';

export default function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/saveEmail', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                // Email saved successfully
                setMessage('Email enregistré avec succès');
                setEmail(''); // Effacer le champ email après l'enregistrement
            } else {
                // Handle error
                setMessage('Erreur lors de l\'enregistrement de l\'email');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Erreur lors de l\'enregistrement de l\'email');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="block sm:flex w-full gap-4 mb-4">
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="mb-5 p-2 sm:mb-0 px-4 rounded-md ring-1 ring-black hover:duration-200 duration-200 outline-none placeholder:text-black focus:ring-violet-800 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="submit"
                    value="Notifiez-moi"
                    className="bg-violet-800 hover:bg-violet-700 py-2.5 md:py-3 lg:py-4 px-5 md:px-7 lg:px-8 rounded-full text-white duration-200 hover:duration-200 hover:drop-shadow-xl font-raleway font-bold"
                />
            </form>

            {/* Afficher le message conditionnellement */}
            {message && <p className="mb-5 font-gothic">{message}</p>}
        </div>
    );
}
