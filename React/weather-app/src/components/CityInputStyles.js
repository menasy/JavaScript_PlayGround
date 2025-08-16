const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        border: state.isFocused ? '2px solid #3B82F6' : '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '12px',
        padding: '8px 12px',
        boxShadow: state.isFocused 
            ? '0 0 0 3px rgba(59, 130, 246, 0.1)' 
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        fontSize: '16px',
        minHeight: '52px',
        transition: 'all 0.2s ease',
        '&:hover': {
            borderColor: '#3B82F6',
            transform: 'translateY(-1px)'
        }
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#6B7280',
        fontSize: '16px'
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#1F2937',
        fontSize: '16px',
        fontWeight: '500'
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        marginTop: '8px'
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected 
            ? '#3B82F6' 
            : state.isFocused 
                ? 'rgba(59, 130, 246, 0.1)' 
                : 'transparent',
        color: state.isSelected ? '#FFFFFF' : '#1F2937',
        padding: '12px 16px',
        fontSize: '16px',
        transition: 'all 0.2s ease',
        '&:hover': {
            backgroundColor: state.isSelected ? '#3B82F6' : 'rgba(59, 130, 246, 0.1)'
        }
    })
};

export default customStyles;
