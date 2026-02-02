const SampleMasterWithBe = () => {

    const [formData, setFormData] = React.useState({
        name: "",
        age: "",
        category: "",
        description: "",
        terms: false,
        gender: "",
        mobile: ""
    });

    const [errors, setErrors] = React.useState({});

    const validations = [
        { field: "name", label: "Name", rules: ["required"] },
        { field: "age", label: "Age", rules: ["required"] },
        { field: "category", label: "Category", rules: ["required"] },
        { field: "description", label: "Description", rules: ["required"] },
        { field: "gender", label: "Gender", rules: ["required"] },
        { field: "terms", label: "Terms", rules: ["required"] },
        { field: "mobile", label: "Mobile Number", rules: ["required", "mobile"] }
    ];


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        let finalValue = value;

        if (name === "mobile") {
            finalValue = value.replace(/\D/g, "").slice(0, 10);
        }

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : finalValue
        });
    };


    const validateForm = () => {
        let tempErrors = {};

        validations.forEach(v => {
            const value = formData[v.field];

            v.rules.forEach(rule => {

                if (rule === "required") {
                    if (
                        value === "" ||
                        value === false
                    ) {
                        tempErrors[v.field] = `${v.label} is required`;
                    }
                }

                if (rule === "mobile") {
                    if (value.length !== 10) {
                        tempErrors[v.field] = "Mobile number must be 10 digits";
                    }
                }

            });
        });

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };


    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Form Data:", formData);
            alert("Form submitted successfully 🎉");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">

                <h2 className="text-2xl font-semibold text-center mb-6">
                    Sample Master Form
                </h2>

                {/*<div className="mb-4">*/}
                {/*    <input*/}
                {/*        name="name"*/}
                {/*        autoComplete="off"*/}
                {/*        placeholder="Name"*/}
                {/*        value={formData.name}*/}
                {/*        onChange={handleChange}*/}
                {/*        className="w-full border rounded-lg px-3 py-2"*/}
                {/*    />*/}
                {/*    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}*/}
                {/*</div>*/}


                <div className="mb-4">
                    <input
                        type="number"
                        autoComplete="off"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                </div>


                <div className="mb-4">
                    <input
                        name="mobile"
                        autoComplete="off"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>


                <div className="mb-4">
                    <select
                        name="category"
                        autoComplete="off"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                    >
                        <option value="">Select category</option>
                        <option value="student">Student</option>
                        <option value="employee">Employee</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                </div>


                <div className="mb-4">
                    <textarea
                        name="description"
                        autoComplete="off"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                </div>


                <div className="mb-4">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                        /> Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                        /> Female
                    </label>
                    {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                </div>


                <div className="mb-4">
                    <label>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                        /> I agree to terms
                    </label>
                    {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                    Submit
                </button>

            </div>
        </div>
    );
};
