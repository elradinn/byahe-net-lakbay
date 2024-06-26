"use client";

import Select from "react-select";
// import ReactFlagSelect from 'react-flags-select';

import useCountries from "@/app/hooks/useCountries";

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
};

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
    const { getAll } = useCountries();

    return (
        <div>
            <Select
                placeholder="Anywhere"
                className="z-[9999]"
                isClearable
                options={getAll()}
                value={value}
                onChange={(val) => onChange(val as CountrySelectValue)}
                formatOptionLabel={(opt: any) => (
                    <div className="flex flex-row items-center gap-3">
                        <div>{opt.flag}</div>
                        {/* <ReactFlagSelect
                            selected={opt.value.toLowerCase()}
                            selectedSize={18}
                            onSelect={() => {}}
                        /> */}
                        <div>
                            {opt.label},
                            <span className="ml-1 text-neutral-500 text-bold">
                                {opt.region}
                            </span>
                        </div>
                    </div>
                )}
                classNames={{
                    control: () => "p-3 border-2",
                    input: () => "text-lg",
                    option: () => "text-lg",
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: "black",
                        primary25: "#FFE4E6",
                    },
                })}
            />
        </div>
    );
};

export default CountrySelect;
