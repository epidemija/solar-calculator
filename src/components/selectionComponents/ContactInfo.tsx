interface ContactInfoProps {
    contactInfo: {
        salutation: string;
        firstName: string;
        sureName: string;
        email: string;
        phone: string;
    };
    setContactInfo: React.Dispatch<React.SetStateAction<{
        salutation: string;
        firstName: string;
        sureName: string;
        email: string;
        phone: string;
    }>>;
}
function ContactInfo({ contactInfo, setContactInfo }: ContactInfoProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setContactInfo({
            ...contactInfo,
            [name]: value
        });
    };
    return (
        <div className="duration-100 animate-appearance-in">
            <h2 className="text-2xl font-bold mb-4 text-center">An wen dürfen wir uns wenden?
            </h2>
            <p className="text-center mb-8">
            Sie erhalten eine ungefähre, unverbindliche Pachtschätzung per E-Mail, und ein Mitarbeiter <br /> wird sich innerhalb von 5 Tagen bei Ihnen melden. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
                <select  name="salutation" value={contactInfo.salutation} onChange={handleChange} className="border p-2 rounded-md mb-4 md:col-span-2">
                    <option value="Salutation">Anrede*</option>
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                </select>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Vorname*"
                    value={contactInfo.firstName}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="sureName"
                    placeholder="Nachname*"
                    value={contactInfo.sureName}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-Mail*"
                    value={contactInfo.email}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Telefon* (für Rückfragen)"
                    value={contactInfo.phone}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
            </div>
            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        // checked={isAgreed}
                        // onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    <span>Mit der Zustimmung zur Datenschutzerklärung willigen Sie ein, dass W Power Sie innerhalb von 5 Werktagen bezüglich Ihrer Anfrage kontaktiert.</span>
                </label>
            </div>
        </div>
    );
}

export default ContactInfo;