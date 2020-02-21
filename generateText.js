exports.generateText = function(a) {
    return `              Hello!
            This is the application from ${a.first} ${a.last}.

            Child's Data:
            Child's name is ${a.kidfirst} ${a.kidlast}
            Gutschein number is ${a.gutschein} valid until ${a.valid_until}
            Child's birthday is ${a.birthdate}

            Parent's Data:
            Parent's name is ${a.first} ${a.last}
            Contact information:
            ${a.email}
            ${a.phone_number}
            Adresse:
            ${a.zip_code}, ${a.city}
            ${a.street_hous}


            This application was sent with Kita-Finder🚀!`;
};
